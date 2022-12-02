const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Connect to the database
pool.connect((err) => {
    if (err) {
        console.log(err.message);
    }
});

// Import problem methods    
const problems = require("./controllers/problems.controller");

// Problem controllers
problems.addProblem(app, pool);
problems.editProblemById(app, pool);
problems.deleteProblem(app, pool);
problems.getAllProblems(app, pool);
problems.filterProblems(app, pool);

// Import code snippet methods
const snippet = require("./controllers/snippet.controller");

// Snipppet controllers
snippet.addSnippet(app, pool);
snippet.deleteSnippetById(app, pool);
snippet.getAllSnippets(app, pool);
snippet.editSnippetById(app, pool);
snippet.filterSnippets(app, pool);

// Import user auth methods
const user = require("./controllers/user.auth");

user.singUp(app, pool);
user.signIn(app, pool);

// Start the server
app.listen(PORT, () => {
    console.log(`Server has started at the port ${PORT}`);
});