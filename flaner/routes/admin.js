const express = require('express');

const isClient = require('../middleware/isClient');
const isAdmin = require('../middleware/isAdmin');

const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/:client', isClient, adminController.postLogin);

router.get('/:client/messages', isClient, isAdmin, adminController.getMessages);
router.delete('/:client/messages/:key', isClient, isAdmin, adminController.deleteMessage);

router.get('/:client/appointments', isClient, isAdmin, adminController.getAppointments);
router.delete('/:client/appointments/:key', isClient, isAdmin, adminController.deleteAppointment);

module.exports = router;
