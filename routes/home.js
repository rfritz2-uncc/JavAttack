const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/', function(req, res) {
    res.render('home');
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