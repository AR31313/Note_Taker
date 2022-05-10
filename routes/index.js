//Activity 22
const express = require('express');

// Import our modular routers for /tips and /feedback
const noteRoutes = require('./noteroutes');

const app = express();

app.use('/noteroutes', noteRoutes);

module.exports = app;
