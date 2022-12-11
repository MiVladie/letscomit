const axios = require('axios');

const Constants = require('../config/constants');

exports.postMessage = async (req, res, next) => {
	const client = req.params.client;
	const message = req.body.message;

	try {
		await axios.post(Constants.DATABASE_URL + client + '/messages.json', message);
		res.status(200).json({ message: 'Message was sent successfully!' });
	} catch (error) {
		next(error);
	}
};
