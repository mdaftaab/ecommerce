require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const connectDb = require("./db")
// const userModel = require("./users");
const PORT = process.env.PORT || 5000;
const router = require("./routes/auth");

// Routes
app.use('/api/auth', router);

// Middleware = let's tackle cors
const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

connectDb().then(() => {
    // Start server
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});