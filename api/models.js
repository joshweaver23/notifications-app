const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const Notification = mongoose.model(
  'Notification',
  NotificationSchema
);

module.exports = Notification;
