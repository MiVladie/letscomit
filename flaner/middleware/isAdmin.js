const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/constants');

module.exports = (req, _, next) => {
	const authHeader = req.get('Authorization');

	if (!authHeader) {
		return next();
	}

	const token = authHeader.split(' ')[1];

	let decodedToken;

	try {
		decodedToken = jwt.verify(token, JWT_SECRET);
	} catch (error) {
		return next(error);
	}

	if (!decodedToken) {
		return next();
	}

	next();
};
