const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { query } = require("express");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // req.body
    
// Create a problem
app.post("/addProblem", async(req, res) => {
    try {
        // Get the params from the request body
        const { web_url, problem_name, website_name, category, difficulty } = req.body; 

        // Execute the query
        const newProblem = await pool.query(
            "INSERT INTO problems (web_url, problem_name, website_name, category, difficulty) \
            VALUES ($1, $2, $3, $4, $5) RETURNING *", [web_url, problem_name, website_name, category, difficulty]); 

        // Display the results in Postman
        res.json("A new problem has been added successfully");
        res.json(newProblem.rows);

    } catch (err) {
        console.log(err.message);
    }
});

// Edit a problem
app.put("/editProblem/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { web_url, problem_name, website_name, category, difficulty } = req.body;

        let queryStr = `UPDATE problems `;
        let count = 0;

        // Check for which parameters has been passed
        if (web_url !== "") {
            if (count === 0) {
                queryStr += `SET web_url = '${web_url}' `;
            } else {
                queryStr += `, web_url = '${web_url}' `;
            }
            count++;
        }
        if (problem_name !== "") {
            if (count === 0) {
                queryStr += `SET problem_name = '${problem_name}' `;
            } else {
                queryStr += `, problem_name = '${problem_name}' `;
            }
            count++;
        }
        if (website_name !== "") {
            if (count === 0) {
                queryStr += `SET website_name = '${website_name}' `;
            } else {
                queryStr += `, website_name = '${website_name}' `;
            }
            count++;
        }
        if (category !== "") {
            if (count  == 0) {
                queryStr += `SET category = '${category}' `;        
            } else {
                queryStr += `, category = '${category}' `;
            }
            count++;
        }
        if (difficulty !== "") {
            if (count === 0) {
                queryStr += `SET difficulty = '${difficulty}' `;
            } else {
                queryStr += `, difficulty = '${difficulty}' `;
            }
            count++;
        }
        queryStr += `WHERE problem_id = ${id}`;

        if (count > 0) {
           
            await pool.query(queryStr);

            // Display the result in Postman
            res.json(`Problem with id ${id} has been updated`);
        }

    } catch (err) {
        console.log(err.message);
    }
});

// Delete a problem
app.delete("/deleteProblem/:id", async(req, res) => {
    try {
        const { id } = req.params; // Get the id from the route

        await pool.query("DELETE FROM problems WHERE problem_id = $1", [id]); // Execute the query

        res.json(`Problem with id ${id} has been deleted`); // Display the result in Postman
    } catch (err) {
        console.log(err.message);
    }
});

// Display all problems
app.get("/allproblems", async(req, res) => {
    const allproblems = await pool.query("SELECT * FROM problems");
    res.json(allproblems.rows)
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});