const express = require('express');
const functions = require('firebase-functions');

const bodyParser = require('body-parser');

const isError = require('./middleware/isError');
const setHeaders = require('./middleware/setHeaders');

const adminRoutes = require('./routes/admin');
const messageRoutes = require('./routes/message');
const appointmentRoutes = require('./routes/appointment');

const app = express();

app.use(setHeaders);

app.use(bodyParser.json());

app.use('/admin', adminRoutes);
app.use('/message', messageRoutes);
app.use('/appointment', appointmentRoutes);

app.use(isError);

exports.app = functions.https.onRequest(app);
