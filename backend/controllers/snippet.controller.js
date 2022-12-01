const url = require('url');

// Add a code snippet
const addSnippet = function(app, pool) {
    app.post("/add-snippet", async(req, res) => {
        try {
            // Get the params from the request body
            const { name, description, programming_language, content, user_id } = req.body;

            // Execute the query
            const newSnippet = await pool.query("INSERT INTO code_snippets \
                (name, description, programming_language, content, user_id) \
                VALUES ($1, $2, $3, $4, $5) RETURNING *", [name, description, programming_language, content, user_id]);

            // Display the results in Postman
            res.json(newSnippet.rows);
        } catch (err) {
            console.log(err.message);
        }
    });
};

// Delete a code snippet
const deleteSnippetById = function(app, pool) {
    app.delete("/delete-snippet/:id", async (req, res) => {
        try {
            const { id } = req.params;
            await pool.query("DELETE FROM code_snippets WHERE snippet_id = $1", [id]); // Execute the query
    
            res.json(`Snippetwith id ${id} has been deleted`); // Display the result in Postman
        } catch (err) {
            console.log(err.message);
        }
    });
};

// Display all code snippets
const getAllSnippets = function(app, pool) {
    app.get("/all-snippets", async (req, res) => {
        try {
            const allSnippets = await pool.query("SELECT * FROM code_snippets");
            res.json(allSnippets.rows)
        } catch (err) {
            console.log(err.message);
        }
    });
};

// Edit a snippet
const editSnippetById = function(app, pool) {
    app.put("/edit-snippet/:id", async (req, res) => {
        try {
            const { id } = req.params;
            const { name, description, programming_language, content, user_id } = req.body;
    
            let queryStr = `UPDATE code_snippets `;
            let count = 0;
    
            // Check for which parameters has been passed
            if (name !== "") {
                if (count === 0) {
                    queryStr += `SET name = '${name}' `;
                } else {
                    queryStr += `, name = '${name}' `;
                }
                count++;
            }
            if (description !== "") {
                if (count === 0) {
                    queryStr += `SET description = '${description}' `;
                } else {
                    queryStr += `, description = '${description}' `;
                }
                count++;
            }
            if (programming_language !== "") {
                if (count === 0) {
                    queryStr += `SET programming_language = '${programming_language}' `;
                } else {
                    queryStr += `, programming_language = '${programming_language}' `;
                }
                count++;
            }
            if (content !== "") {
                if (count  == 0) {
                    queryStr += `SET content = '${content}' `;        
                } else {
                    queryStr += `, content = '${content}' `;
                }
                count++;
            }
            if (user_id !== "") {
                if (count === 0) {
                    queryStr += `SET user_id = '${user_id}' `;
                } else {
                    queryStr += `, user_id = '${user_id}' `;
                }
                count++;
            }
            queryStr += `WHERE snippet_id = ${id}`;
    
            if (count > 0) {
               
                await pool.query(queryStr);
    
                // Display the result in Postman
                res.json(`Code snippet with id ${id} has been updated`);
            }
    
        } catch (err) {
            console.log(err.message);
        }
    });
};

// Filter snippets using URL query parameters
const filterSnippets = function(app, pool) {
    app.get("/filter-snippets", async(req, res) => {
        try {
            const currentUrl = "http://localhost:5000/filter-snippets?name=dijkstra&programming_language=cpp"; // Get the full url from frontend
            let q = url.parse(currentUrl, true);
            let obj = JSON.parse(JSON.stringify(q.query));

            let queryStr  = "SELECT * from code_snippets WHERE ";
            let count = 0;

            for (let i in obj) {
                queryStr += `${i} = '${obj[i]}' AND `;
                count++;
            }
            if (count > 0) {
                const lastIndex = queryStr.lastIndexOf("AND");
                queryStr = queryStr.substring(0, lastIndex)
            }
            const selected = await pool.query(queryStr);
            res.json(selected.rows);
        

        } catch (err) {
            console.log(err.message);
        }
    });
}

module.exports = {
    addSnippet,
    deleteSnippetById,
    getAllSnippets,
    editSnippetById,
    filterSnippets
}