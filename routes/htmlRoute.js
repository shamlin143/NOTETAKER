const fs = require('fs');
const path = require('path');
const express = require('express');
var router = express.Router();








router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

// Display index.html when all other routes are accessed
router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});


module.exports = router;