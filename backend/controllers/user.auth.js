const bcrypt = require("bcrypt");
const { check } = require('express-validator');

// Sign up
const singUp = function (app, pool) {
    try {
        app.post("/sign-up", [
            check('email').isEmail().normalizeEmail(),
            check('password').isLength({ min: 5 }).trim().escape()
        ],
        async (req, res) => {
            // Get the parameters
            const { username, name, email, password } = req.body;

            // Check if user with username exists
            const usernameData = await pool.query(
                "SELECT * FROM users WHERE username = $1",
                [username]
            );
            const usernameArr = usernameData.rows;

            //  Check if user with this email exists
            const emailData = await pool.query(
                "SELECT * FROM users WHERE email = $1",
                [email]
            );
            const emailArr = emailData.rows;

            // Check if user already exists
            if (usernameArr.length !== 0) {
                return res.status(400).json({
                    status: "bad request",
                    error: `User with the username ${username} already exists.`,
                });
            } else if (emailArr != 0) {
                return res.status(400).json({
                    status: "bad request",
                    error: `User with the email ${email} already exists.`,
                });
            } else {
                // Hash the password
                bcrypt.hash(password, 10, (err, hash) => {
                    if (err) {
                        res.status(err).json({
                            status: "bad request",
                            error: "Hashing error",
                        });
                    }
                    // Create a user object
                    const user = {
                        username,
                        name,
                        email,
                        password: hash,
                    };

                    // insert the user into database
                    pool.query(
                        "INSERT INTO users (username, name, email, password) \
                    VALUES ($1, $2, $3, $4) RETURNING *",
                        [user.username, user.name, user.email, user.password],
                        (err) => {
                            if (err) {
                                console.log(err.message);
                                return res.status(500).json({
                                    status: "database error",
                                    error: "Database error. Can't insert user.",
                                });
                            } else {
                                res.status(200).json({
                                    status: "success",
                                    message: "User has been added."
                                });
                            }
                        }
                    );
                });
            }
        });
    } catch (err) {
        console.log(err.message);
    }
};

// Sign in
const signIn = function (app, pool) {
    try {
        app.post("/sign-in", [
            check('email').isEmail().normalizeEmail(),
            check('password').isLength({ min: 5 }).trim().escape()
        ],
        async (req, res) => {
            // Get the login credentials
            const { email, password } = req.body;

            // Check the email
            let existingUser;
            if (email !== "") {
                existingUser = await pool.query(
                    "SELECT * FROM users WHERE email = $1",
                    [email]
                );
            } else {
                res.json("Please provide a valid username or email.");
            }

            const user = existingUser.rows;
            // Check if user has an account
            if (user.length === 0) {
                res.status(400).json({
                    status: "bad request",
                    error: "User is not registered, please sign up first.",
                });
            } else {
                // Validate the password
                bcrypt.compare(password, user[0].password, (err, result) => {
                    if (err) {
                        res.status(400).json({
                            status: "bad request",
                            error: "Server error",
                        });
                    } else if (result === true) {
                        res.status(200).json({
                            status: "success",
                            message: "User signed in successfully.",
                            role: existingUser.rows[0].role
                        });
                    } else {
                        if (result !== true) {
                            res.status(400).json({
                                status: "bad request",
                                error: "Incorrect password!"
                            });
                        }
                    }
                });
            }
        });
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = {
    singUp,
    signIn,
};
