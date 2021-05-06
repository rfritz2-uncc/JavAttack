const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/', function(req, res) {
    res.render('forum');
});

module.exports = router;