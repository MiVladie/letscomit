const axios = require('axios');

const { DATABASE_URL } = require('../config/constants');

module.exports = async (req, _, next) => {
	const client = req.params.client;

	try {
		const clients = await axios.get(DATABASE_URL + 'clients.json');

		if (!clients.data.includes(client)) {
			const error = new Error('Client was not recognized!');
			error.statusCode = 404;
			throw error;
		}
	} catch (error) {
		return next(error);
	}

	next();
};
