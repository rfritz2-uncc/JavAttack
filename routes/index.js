const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/login', UserController.login);

router.get('/register', UserController.register);

module.exports = router;