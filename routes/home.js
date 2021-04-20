const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('home');
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