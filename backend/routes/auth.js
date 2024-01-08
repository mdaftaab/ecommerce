const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth');

// Home route
router.route("/").get(authController.home);

// Registration route
router.route('/register').post(authController.register);

// Login route
router.route('/login').post(authController.login);

// User route
router.route('/user').get(authController.user);

module.exports = router;
