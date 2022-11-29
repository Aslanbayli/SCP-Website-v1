const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes
    
// Create an account
app.post("/addProblem", async(req, res) => {
    try {
        const { web_url, porblem_name, website_name, category, programming_language, difficulty } = req.body;
        const newProblem = await pool.query(
            "INSERT INTO Problems (web_url, porblem_name, website_name, category, programming_language, difficulty) \
            VALUES ($1, $2, $3. $4, $5, $6) RETURNING *", [web_url, porblem_name, website_name, category, programming_language, difficulty]); 
        res.json(newProblem.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// Edit account info

// Delete an account


app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});