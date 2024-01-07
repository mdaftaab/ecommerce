const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userModel = require("./users");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to server')
})

app.get('/create', async function (req, res) {
    const createdUser = await userModel.create({
        name: "Alam",
        email: "alam@gmail.com",
        password: "36234466899",
    });
    res.send(createdUser);
});

app.get("/allusers", async function (req, res) {
    let allUsers = await userModel.find();
    res.send(allUsers);
})

app.get("/user", async function (req, res) {
    let allUsers = await userModel.findOne({
        name: "Alam"
    });
    res.send(allUsers);
})

// Routes
// app.use('/api/auth', require('./routes/auth'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
