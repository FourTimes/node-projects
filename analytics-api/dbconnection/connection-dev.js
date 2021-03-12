const util = require("util");
const mysql = require("mysql");
const pool = mysql.createPool({
  host: "192.168.0.110",
  user: "user",
  password: ".",
  database: "rcmsdata",
  dateStrings: true,
});

// Ping database to check for common exception errors.

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  }

  if (connection) connection.release();

  return;
});

// Promisify for Node.js async/await.
pool.query = util.promisify(pool.query);

module.exports = pool;


// test - 9a3a91fbfa666ad5196d6e6ac5928bbe3adbfdc4
// sonar-scanner -Dsonar.projectKey=test -Dsonar.sources=.  -Dsonar.host.url=http://13.82.230.104:9000 -Dsonar.login=9a3a91fbfa666ad5196d6e6ac5928bbe3adbfdc4

