const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController.js');

router.get('/', UserController.play);

module.exports = router;