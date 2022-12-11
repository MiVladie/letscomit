const jwt = require('jsonwebtoken');
const axios = require('axios');

const Constants = require('../config/constants');

exports.postLogin = async (req, res, next) => {
	const client = req.params.client;

	const email = req.body.credentials.email;
	const password = req.body.credentials.password;

	try {
		const credentials = await axios.get(Constants.DATABASE_URL + client + '/credentials.json');

		const realEmail = credentials.data.email;
		const realPassword = credentials.data.password;

		if (email === realEmail && password === realPassword) {
			const token = jwt.sign({ email: email }, Constants.JWT_SECRET, { expiresIn: '1h' });
			res.status(200).json({
				token: token,
				expirationDate: new Date().setHours(new Date().getHours() + 1),
				message: 'Successfully logged in!'
			});
		} else {
			const error = new Error('Incorrect email or password');
			error.statusCode = 401;
			throw error;
		}
	} catch (error) {
		next(error);
	}
};

exports.getMessages = async (req, res, next) => {
	const client = req.params.client;

	try {
		const messages = await axios.get(Constants.DATABASE_URL + client + '/messages.json');
		res.status(200).json({ messages: messages.data });
	} catch (error) {
		next(error);
	}
};

exports.deleteMessage = async (req, res, next) => {
	const client = req.params.client;
	const key = req.params.key;

	try {
		await axios.delete(Constants.DATABASE_URL + client + '/messages/' + key + '.json');
		res.status(200).json({ message: 'Message has been successfully deleted!' });
	} catch (error) {
		next(error);
	}
};

exports.getAppointments = async (req, res, next) => {
	const client = req.params.client;

	try {
		const appointments = await axios.get(Constants.DATABASE_URL + client + '/appointments.json');
		res.status(200).json({ appointments: appointments.data });
	} catch (error) {
		next(error);
	}
};

exports.deleteAppointment = async (req, res, next) => {
	const client = req.params.client;
	const key = req.params.key;

	try {
		await axios.delete(Constants.DATABASE_URL + client + '/appointments/' + key + '.json');
		res.status(200).json({ message: 'Appointment has been successfully deleted!' });
	} catch (error) {
		next(error);
	}
};
