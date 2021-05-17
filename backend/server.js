require("dotenv").config(); // Read values from .env file.
const express = require("express");
const db = require("./db");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

//Middleware
app.use(cors()); // Accept requests from different domains.
app.use(morgan("dev")); // Morgan Options: 'tiny', 'dev' .
app.use(express.json()); // Convert to json.

// Routes
app.get("/api/v1/students", async (req, res) => {
  try {
    const results = await db.query("SELECT * FROM students;");
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        students: results.rows,
      },
    });
  } catch (err) {
    console.error(err);
  }
});

app.get("/api/v1/students/:id", async (req, res) => {
  const student_id = req.params.id;
  try {
    const results = await db.query(
      "SELECT * FROM student WHERE student_id = $1",
      [student_id]
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        student: results.rows[0],
      },
    });
  } catch (err) {
    console.error(err);
  }
});

app.post("/api/v1/students/", async (req, res) => {
  const firstName = req.body.firstname;
  const lastName = req.body.lastname;
  const username = req.body.username;
  const email = req.body.email;
  const pass = req.body.password;
  try {
    const results = await db.query(
      "INSERT INTO students (firstName, lastName, username, email, pass) values ($1, $2, $3, $4, $5) RETURNING *;",
      [firstName, lastName, username, email, pass]
    );
    res.status(201).json({
      status: "success",
      results: results.rows.length,
      data: {
        students: results.rows[0],
      },
    });
  } catch (err) {
    console.error(err);
  }
});

app.put("/api/v1/students/:id", async (req, res) => {
  const student_id = req.params.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const username = req.body.username;
  const email = req.body.email;
  const pass = req.body.pass;

  try {
    const results = await db.query(
      "UPDATE courses SET firstName = $1, lastName = $2, username = $3, email = $4, pass = $5 WHERE course_id = $6 RETURNING *;",
      [firstName, lastName, username, email, pass, student_id]
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        student: results.rows[0],
      },
    });
  } catch (err) {
    console.error(err);
  }
});

app.delete("/api/v1/students/:id", async (req, res) => {
  const student_id = req.params.id;
  try {
    const results = await db.query(
      "DELETE FROM students WHERE student_id = $1 RETURNING *;",
      [student_id]
    );
    res.status(200).json({
      status: "success",
      results: results.rows.length,
      data: {
        student: results.rows,
      },
    });
  } catch (err) {
    console.error(err);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and listening on port => [${port}].`);
});
