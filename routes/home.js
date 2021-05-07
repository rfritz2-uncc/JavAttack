const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');
const admin = require('firebase-admin');

router.get('/', function(req, res) {
  const sessionCookie = req.cookies.session || "";
  admin
    .auth()
    .verifySessionCookie(sessionCookie, true)
    .then(() => {
      res.render('home');
    })
    .catch((error) => {
      res.redirect('/');
    });
});

router.get('/tutorial', function(req, res) {
  res.render('tutorial');
});

module.exports = router;

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }