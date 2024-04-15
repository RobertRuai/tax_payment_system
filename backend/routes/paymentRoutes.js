const express = require('express');
const router = express.Router();
const Payment = require('../models/Payment');

//make payment
router.post('/pay', async (req, res) => {
  try {
    const { userId, amount, description } = req.body;
    const newPayment = new Payment({ userId, amount, description });
    await newPayment.save();
    res.json({ message: 'Payment successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
