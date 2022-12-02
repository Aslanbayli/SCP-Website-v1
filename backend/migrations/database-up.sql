CREATE DATABASE scp_website;

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY UNIQUE,
    username VARCHAR(100) UNIQUE NOT NULL,
    name VARCHAR(100),
    email TEXT NOT NULL UNIQUE,
   	password TEXT NOT NULL,
	role VARCHAR(100)
);

CREATE TABLE admins (
    is_faculty BOOLEAN,
    e_board_position VARCHAR(100)
) INHERITS (Users);

CREATE TABLE problems (
	problem_id SERIAL PRIMARY KEY UNIQUE,
    web_url TEXT UNIQUE NOT NULL,
    problem_name VARCHAR(100),
    website_name VARCHAR(100),
    category VARCHAR(100),
    difficulty VARCHAR(100)
);

CREATE TABLE solved (
    user_id INTEGER REFERENCES Users,
    problem_id INTEGER REFERENCES Problems,
    PRIMARY KEY (user_id, problem_id)
);

CREATE TABLE code_snippets (
    snippet_id SERIAL PRIMARY KEY UNIQUE,
    name VARCHAR(255),
    description TEXT,
    programming_language VARCHAR(100),
    content TEXT,
    user_id INTEGER REFERENCES Users NOT NULL
);

ALTER TABLE users add column role varchar(100);

