const express = require('express');
const router = express.Router();
const { Transaction } = require('../models');

router.post('/pay-tax', async (req, res) => {
    const { userId, amount, description } = req.body;
    try {
        // Perform payment processing logic
        await Transaction.create({ userId, amount, description });
        res.json({ message: 'Payment successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
