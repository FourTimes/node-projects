const express = require("express");
const router = express.Router();
const connection = require("../Database/MySQL");

router.get("/", (req, res, next) => {
  try {
    connection.query(
      `SELECT 
      name
    FROM 
      test`,
      (error, results, fields) => {
        if (error) {
          return res.send(error);
        }
        res.json(results);
      }
    );
  } finally {
    connection.close;
  }
});

router.post("/id", (req, res, next) => {
  try {
    connection.query(
      `SELECT 
      name
    FROM 
      tests
        WHERE 
          id = ${req.body.id}`,
      (error, results, fields) => {
        if (error) return res.send("Data handling releated issue");
        res.json(results);
      }
    );
  } catch {
    res.status(500);
  } finally {
    connection.close;
  }
});

module.exports = router;
