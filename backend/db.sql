CREATE DATABASE test_db;

CREATE TABLE IF NOT EXISTS students (
    student_id SERIAL PRIMARY KEY,
    username VARCHAR (255) UNIQUE NOT NULL,
    firstName VARCHAR (255) NOT NULL,
    lastName VARCHAR (255) NOT NULL,
    email VARCHAR (255) NOT NULL,
    pass VARCHAR (255) NOT NULL
);

INSERT INTO students (username, firstName, lastName, email, pass) values ('username1', 'firstname1', 'lastname1', 'email1@example.com', 'pass1');
INSERT INTO students (username, firstName, lastName, email, pass) values ('username2', 'firstname2', 'lastname2', 'email2@example.com', 'pass2');
INSERT INTO students (username, firstName, lastName, email, pass) values ('username3', 'firstname3', 'lastname3', 'email3@example.com', 'pass3');
INSERT INTO students (username, firstName, lastName, email, pass) values ('username4', 'firstname4', 'lastname4', 'email4@example.com', 'pass4');

