const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/', UserController.play);

router.get('/lvl1', function (req, res) {
    res.render('lvl1');
  });
router.get('/lvl2', function (req, res) {
    res.render('lvl2');
  });
router.get('/lvl3', function (req, res) {
    res.render('lvl3');
  });
router.get('/lvl4', function (req, res) {
    res.render('lvl4');
  });

module.exports = router;