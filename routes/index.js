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
    console.log('session logout');
    res.clearCookie('session');
    res.redirect('/');
});

router.get('/register', UserController.register);

router.get('/shop', (req, res) => {
    res.render('ingame_shop');
})

router.get('/leaderboard', (req, res) => {
    res.render('leaderboard');
})

module.exports = router;