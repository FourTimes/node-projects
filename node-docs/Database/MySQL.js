var mysql = require("mysql");
const config = require("config");

var connection = mysql.createConnection({
  host: config.get("database.host"),
  user: config.get("database.user"),
  password: config.get("database.password"),
  database: config.get("database.database"),
});
connection.connect();
module.exports = connection;
