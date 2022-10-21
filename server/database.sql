CREATE DATABASE scp_website;

CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY UNIQUE,
    username VARCHAR(100) PRIMARY KEY UNIQUE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    usf_email VARCHAR(100),
    year_in_college INTEGER,
    major VARCHAR(100),
    DOB DATE
);

CREATE TABLE Admin (
    usf_email VARCHAR(100) PRIMARY KEY UNIQUE,
    is_faculty BOOLEAN,
    e_board_position VARCHAR(100)
);

CREATE TABLE Problems (
    web_url TEXT PRIMARY KEY,
    problem_name VARCHAR(100),
    website_name VARCHAR(100),
    category VARCHAR(100),
    programming_language VARCHAR(100),
    difficulty VARCHAR(100)
);

CREATE TABLE Solved (
    user_name VARCHAR(100) REFERENCES User,
    problem_id INTEGER REFERENCES Problems,
    CONSTRAINT pk_solved PRIMARY KEY UNIQUE (user_name, problem_id)
);

CREATE TABLE Code_Snippets (
    snippet_id SERIAL PRIMARY KEY UNIQUE,
    s_name VARCHAR(255),
    s_description TEXT,
    programming_language VARCHAR(100),
    content TEXT,
    username REFERENCES User NOT NULL,
);

CREATE TABLE Events (
    e_id SERIAL PRIMARY KEY,
    e_name VARCHAR(100),
    e_description TEXT,
    poster BLOB,
    e_location TEXT,
    e_time TIME(0),
    e_date DATE
);

CREATE TABLE Attends (
    username VARCHAR(100) PRIMARY KEY,
    e_id INTEGER PRIMARY KEY,
    CONSTRAINT user_fk FOREIGN KEY (username) REFERENCES User,
    CONSTRAINT event_fk FOREIGN KEY (e_id) REFERENCES Events
);


