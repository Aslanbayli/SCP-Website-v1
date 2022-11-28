const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes
    
// Create an account

// Edit account info

// Delete an account



const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});