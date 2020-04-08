// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');
const router = require('router');
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Require routes file
app.use(apiRoute);
app.use(htmlRoute);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});