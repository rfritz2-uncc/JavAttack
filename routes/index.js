const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', function (req, res) {
    res.render('index', { login: req.query });
});

router.post('/sessionLogin', urlencodedParser, UserController.login);

router.get('/sessionLogout', (req, res) => {
    res.clearCookie('session');
    res.redirect('/');
})

router.get('/register', UserController.register);

module.exports = router;