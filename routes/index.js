//Activity 22
// const express = require('express');

// Import our modular routers for /tips and /feedback
const app = require('express').Router();
const noteRoutes = require('./noteroutes');


app.use('/notes', noteRoutes);

module.exports = app;
