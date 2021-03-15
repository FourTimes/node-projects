const express = require("express");
const client = require("../Database/Postgres");
const router = express.Router();

router.get("/", (req, res, next) => {
  try {
    client.query(
      `SELECT
         * 
         FROM 
         test`,
      (error, results, fields) => {
        if (error) return res.send("Data handling releated issue");
        res.status(200).send(JSON.stringify(results.rows));
      }
    );
  } catch (error) {
  } finally {
  }
});

module.exports = router;