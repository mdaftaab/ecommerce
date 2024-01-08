const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Home route
router.route("/").get(authController.home);

// Registration route
router.route('/register').get(authController.register);

// Login route
router.route('/login').get(authController.login);

module.exports = router;
