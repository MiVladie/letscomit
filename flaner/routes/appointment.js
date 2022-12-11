const express = require('express');

const isClient = require('../middleware/isClient');

const appointmentController = require('../controllers/appointment');

const router = express.Router();

router.get('/:client', isClient, appointmentController.getSchedule);
router.post('/:client/queue', isClient, appointmentController.postQueue);
router.post('/:client/venue', isClient, appointmentController.postPaymentVenue);
router.post('/:client/card', isClient, appointmentController.postPaymentCard);
router.post('/:client/webhooks', isClient, appointmentController.postWebhooks);

module.exports = router;
