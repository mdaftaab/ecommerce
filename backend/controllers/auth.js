//controllers/auth.js
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Home Page
const home = async (req, res) => {
  // Implement home page here
  try {
    res
    .status(200)
    .send("Home page")

  } catch (error) {
    res
    .status(400)
    .send("Home Page not found")
    console.log(error);
  }

};

// Register user
const register = async (req, res) => {
  // Implement user registration here
  try {
    res
    .status(200)
    .send("Register page")

  } catch (error) {
    res
    .status(400)
    .send("Register Page not found")
    console.log(error);
  }

};

// Login user
const login = async (req, res) => {
  // Implement user logic here
  try {
    res
    .status(200)
    .send("Login page")

  } catch (error) {
    res
    .status(400)
    .send("Login Page not found")
    console.log(error);
  }
};

module.exports = { register, login, home };
