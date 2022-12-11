const express = require('express');

const isClient = require('../middleware/isClient');

const messageController = require('../controllers/message');

const router = express.Router();

router.post('/:client', isClient, messageController.postMessage);

module.exports = router;
