const axios = require('axios');
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const Constants = require('../config/constants');

const transporter = nodemailer.createTransport(
	sendgridTransport({
		auth: {
			api_key: Constants.SEND_GRID_API_KEY
		}
	})
);

exports.getSchedule = async (req, res, next) => {
	const client = req.params.client;
	const serviceIds = req.query.id.split(',');

	try {
		const services = await axios.get(Constants.DATABASE_URL + client + '/services.json');
		const timetable = await axios.get(Constants.DATABASE_URL + client + '/timetable.json');
		const allAppointments = await axios.get(Constants.DATABASE_URL + client + '/appointments.json');
		const queue = await axios.get(Constants.DATABASE_URL + client + '/queue.json');

		let totalDuration = 0;

		serviceIds.map((id) => {
			let foundService = services.data.find((service) => service.id === +id);

			if (foundService == null) {
				const error = new Error('Requested service cannot be found!');
				error.statusCode = 404;
				throw error;
			}

			totalDuration += foundService.duration;

			return id;
		});

		if (queue.data == null) {
			queue.data = [];
		}

		const queueAppointments = Object.keys(queue.data)
			.map((appointment) => queue.data[appointment])
			.filter((appointment) => new Date(appointment.expiresAt) > new Date());

		const data = { ...allAppointments.data, ...queueAppointments };

		const availableTime = [];

		for (let i = 0; i < 12; i++) {
			const availableTimeForWeek = getScheduleForWeek(i, data, totalDuration, timetable.data);
			availableTime.push(availableTimeForWeek);
		}

		res.status(200).json({ schedule: availableTime });
	} catch (error) {
		next(error);
	}
};

exports.postQueue = async (req, res, next) => {
	const client = req.params.client;
	const appointment = await getAppointmentDetails(req.body.appointment, 'queue', client);

	try {
		await checkAppointmentAvailability(client, appointment, true);
		await postAppointmentToQueue(client, appointment);

		return res.status(200).json({ message: 'Queue has been set.' });
	} catch (error) {
		next(error);
	}
};

exports.postPaymentVenue = async (req, res, next) => {
	const client = req.params.client;

	try {
		const appointment = await getAppointmentDetails(req.body.appointment, 'venue', client);

		await checkAppointmentAvailability(client, appointment);
		await postAppointmentToDB(client, appointment);
		await sendConfirmationEmail(appointment.client.email, 'admin@' + client + '.com');

		return res.status(200).json({ message: 'Appointment has been successfully booked.' });
	} catch (error) {
		next(error);
	}
};

exports.postPaymentCard = async (req, res, next) => {
	const client = req.params.client;

	try {
		const appointment = await getAppointmentDetails(req.body.appointment, 'card', client);

		await checkAppointmentAvailability(client, appointment);

		// Connecting to the client
		const credentials = await axios.get(Constants.DATABASE_URL + client + '/credentials.json');

		const stripe = require('stripe')(credentials.data.stripeSecretKey);

		// Posting an appointment
		const paymentIntent = await stripe.paymentIntents.create({
			amount: appointment.service.price,
			currency: 'gbp',
			metadata: { appointment: JSON.stringify(appointment) }
		});

		await sendConfirmationEmail(appointment.client.email, 'admin@' + client + '.com');

		return res.status(200).json({ clientSecret: paymentIntent.client_secret });
	} catch (error) {
		next(error);
	}
};

exports.postWebhooks = (req, res, next) => {
	const client = req.params.client;
	const event = req.body;

	switch (event.type) {
		case 'charge.succeeded':
			postAppointmentToDB(client, JSON.parse(event.data.object.metadata.appointment));
			break;

		default:
			return res.status(400).end();
	}

	return res.status(200).json({ received: true });
};

const getScheduleForWeek = (week, allAppointments, totalDuration, timetable) => {
	if (allAppointments == null) {
		allAppointments = [];
	}

	const weekStart = new Date();
	weekStart.setDate(weekStart.getDate() + week * 7);
	weekStart.setHours(0, 0, 0, 0);

	const weekEnd = new Date(weekStart);
	weekEnd.setDate(weekEnd.getDate() + 7);
	weekEnd.setHours(24, 0, 0, 0);

	const upcomingAppointments = Object.keys(allAppointments)
		.filter((appointment) => {
			const date = new Date(allAppointments[appointment].service.time);
			return date > weekStart && date < weekEnd;
		})
		.map((appointment) => {
			return {
				time: allAppointments[appointment].service.time,
				duration: allAppointments[appointment].service.duration
			};
		})
		.sort((a, b) => new Date(a.time) - new Date(b.time));

	const availableTime = [[], [], [], [], [], [], []];

	const minuteStep = 30;

	for (let i = 0; i < 7; i++) {
		let timetableStart = timetable[(weekStart.getDay() + i) % 7].start;
		let timetableEnd = timetable[(weekStart.getDay() + i) % 7].end;

		const startTime = new Date(weekStart);
		startTime.setDate(startTime.getDate() + i);

		if (week === 0 && i === 0) {
			startTime.setHours(new Date().getHours());
			startTime.setMinutes(new Date().getMinutes() - (new Date().getMinutes() % minuteStep) + minuteStep);
		} else {
			startTime.setHours(+timetableStart.split(':')[0], +timetableStart.split(':')[1]);
		}

		const endTime = new Date(weekStart);
		endTime.setDate(endTime.getDate() + i);
		endTime.setHours(+timetableEnd.split(':')[0], +timetableEnd.split(':')[1]);

		const dailyAppointments = upcomingAppointments.filter((appointment) => {
			const currentDay = new Date(weekStart);
			currentDay.setDate(weekStart.getDate() + i);
			return currentDay.getDate() === new Date(appointment.time).getDate();
		});

		let counter = 0;
		let currentTime = startTime;

		while (currentTime < endTime) {
			if (dailyAppointments[counter] != null) {
				let futureTime = new Date(dailyAppointments[counter].time);

				if ((futureTime - currentTime) / 1000 / 60 > totalDuration) {
					availableTime[i].push(new Date(currentTime));
					currentTime.setMinutes(currentTime.getMinutes() + minuteStep);
				} else {
					currentTime.setTime(futureTime);
					currentTime.setMinutes(currentTime.getMinutes() + dailyAppointments[counter].duration);
					currentTime.setMinutes(
						currentTime.getMinutes() - (currentTime.getMinutes() % minuteStep) + minuteStep
					);

					counter++;
				}
			} else if ((endTime - currentTime) / 1000 / 60 >= totalDuration) {
				availableTime[i].push(new Date(currentTime));
				currentTime.setMinutes(currentTime.getMinutes() + minuteStep);
			} else {
				break;
			}
		}
	}

	return availableTime;
};

const getAppointmentDetails = async (appointment, type, client) => {
	let totalPrice = 0;
	let totalDuration = 0;

	try {
		const services = await axios.get(Constants.DATABASE_URL + client + '/services.json');

		for (service of appointment.service.id) {
			let foundService = services.data.find((s) => s.id === +service);

			totalPrice += foundService.price;
			totalDuration += foundService.duration;
		}

		let newAppointment;

		if (type === 'queue') {
			const expiresAt = new Date();
			expiresAt.setMinutes(expiresAt.getMinutes() + 15);

			newAppointment = {
				service: {
					time: appointment.service.time,
					duration: totalDuration
				},
				expiresAt: expiresAt
			};
		} else {
			newAppointment = {
				service: {
					id: appointment.service.id,
					time: appointment.service.time,
					duration: totalDuration,
					price: Math.trunc(totalPrice * 100)
				},
				client: appointment.client,
				details: {
					payment: type
				}
			};
		}

		return newAppointment;
	} catch (error) {
		throw error;
	}
};

const checkAppointmentAvailability = async (client, appointment, postQueue) => {
	const start = new Date(appointment.service.time);
	const end = new Date(start);
	end.setMinutes(end.getMinutes() + appointment.service.duration);

	const desired = { start: start, end: end };

	try {
		const maxDate = new Date();
		maxDate.setDate(maxDate.getDate() + 7 * 12);

		if (desired.start.getTime() < new Date().getTime() || desired.start.getTime() > maxDate.getTime()) {
			const error = new Error('Oops, the date seems to be out of range!');
			error.statusCode = 410;
			throw error;
		}

		const allAppointments = await axios.get(Constants.DATABASE_URL + client + '/appointments.json');
		const queue = await axios.get(Constants.DATABASE_URL + client + '/queue.json');

		if (queue.data == null) {
			queue.data = [];
		}

		const queueAppointments = Object.keys(queue.data)
			.map((appointment) => queue.data[appointment])
			.filter((appointment) => new Date(appointment.expiresAt) > new Date());

		const data = { ...allAppointments.data, ...queueAppointments };

		if (data == null) return;

		const upcomingAppointments = Object.keys(data)
			.filter((upcoming) => {
				const date = new Date(data[upcoming].service.time);

				return (
					date.getFullYear() === new Date(appointment.service.time).getFullYear() &&
					date.getMonth() === new Date(appointment.service.time).getMonth() &&
					date.getDate() === new Date(appointment.service.time).getDate()
				);
			})
			.map((upcoming) => {
				const start = new Date(data[upcoming].service.time);
				const end = new Date(start);
				end.setMinutes(end.getMinutes() + data[upcoming].service.duration);

				return { start: start, end: end, key: upcoming };
			});

		let peopleInQueue = [];

		for (upcoming of upcomingAppointments) {
			if (
				(desired.start.getTime() >= upcoming.start.getTime() &&
					desired.start.getTime() <= upcoming.end.getTime()) ||
				(desired.end.getTime() >= upcoming.start.getTime() && desired.end.getTime() <= upcoming.end.getTime())
			) {
				peopleInQueue.push(upcoming.key);
			}
		}

		if (peopleInQueue.length === 0 && !postQueue) {
			const error = new Error('Your session expired! Please, try again.');
			error.statusCode = 410;
			throw error;
		}

		if (peopleInQueue.length > 1) {
			const error = new Error('Someone has booked for this date! Please, try again.');
			error.statusCode = 410;
			throw error;
		}
	} catch (error) {
		throw error;
	}
};

const postAppointmentToQueue = async (client, appointment) => {
	try {
		await axios.post(Constants.DATABASE_URL + client + '/queue.json', appointment);
	} catch (error) {
		throw new Error(error);
	}
};

const postAppointmentToDB = async (client, appointment) => {
	appointment.details.bookingTime = new Date();

	try {
		await axios.post(Constants.DATABASE_URL + client + '/appointments.json', appointment);
	} catch (error) {
		throw new Error(error);
	}
};

const sendConfirmationEmail = async (recipient, sender) => {
	try {
		await transporter.sendMail({
			to: recipient,
			from: sender,
			subject: 'Appointment details',
			html: `<h1>Your booking has been confirmed!<br>Thank you for choosing us.</h1>`
		});
	} catch (error) {
		throw error;
	}
};
