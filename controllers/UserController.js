const utilityFunctions = require('../models/utilityFunctions.js');

const login = (req, res) => {
    console.log(req.body);
    // TEMPORARY authenitcation with hardcoded database
    var users = utilityFunctions.getConnections();
    for (var i = 0; i < users.length; i++) {
        if (req.body.username === users[i].username && req.body.password === users[i].password) {
            res.redirect('/home');
        } else {
            res.redirect('/');
        }
    }
}

const profile = (req, res) => {
    res.render('profile');
}

const register = (req, res) => {
    res.render('registration');
}

const play = (req, res) => {
    res.render('level_page');
}

module.exports = {
    login,
    profile,
    register, 
    play
}