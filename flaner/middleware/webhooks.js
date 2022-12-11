exports.postWebhook = (req, res, _) => {
	const event = req.body;

	switch (event.type) {
		case 'charge.succeeded':
			// const paymentIntent = event.data.object;
			break;

		case 'payment_intent.created':
			// const paymentMethod = event.data.object;
			break;

		default:
			return res.status(400).end();
	}

	return res.status(200).json({ received: true });
};
