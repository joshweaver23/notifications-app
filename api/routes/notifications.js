const express = require('express');
const router = express.Router();
const notificationsModel = require('../models');

router.post('/', async (req, res, next) => {
  const notification = new notificationsModel(req.body);

  try {
    await notification.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get('/', async (req, res, next) => {
  const notifications = await notificationsModel.find({});

  try {
    res.send(notifications);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
