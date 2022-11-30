const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Import problem methods    
const problems = require("./controllers/problems.controller");

// Problem controllers
problems.addProblem(app, pool);
problems.editProblemById(app, pool);
problems.deleteProblem(app, pool);
problems.getAllProblems(app, pool);
problems.filterProblems(app, pool);

// Start the server
app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});