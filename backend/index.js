const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // req.body
    
// Create a problem
app.post("/addProblem", async(req, res) => {
    try {
        const { web_url, name, website, category, difficulty } = req.body;
        const newProblem = await pool.query(
            "INSERT INTO Problems (web_url, problem_name, website_name, category, difficulty) \
            VALUES ($1, $2, $3, $4, $5) RETURNING *", [web_url, name, website, category, difficulty]); 
        res.json(newProblem.rows[0]);
    } catch (err) {
        console.log(err.message);
    }
});

// Edit a problem
app.put("/editProblem/:id", async(req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
    }
});

// Delete a problem
app.delete("/deleteProblem/:id", async(req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
    }
});


app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});