require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const host = 'localhost';
const connectDB = require('../config/dbConn')

connectDB()

//Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => console.log(`Server running on port http://${host}:${PORT}`))
})
