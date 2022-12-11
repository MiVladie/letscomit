module.exports = (error, _, res) => {
	console.log(error);

	const status = error.statusCode || 500;
	const message = error.message || 'Something went wrong!';
	const data = error.data;

	res.status(status).json({ message: message, data: data });
};
