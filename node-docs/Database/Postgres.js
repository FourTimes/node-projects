const { Client } = require("pg");
const config = require("config");

const client = new Client({
  connectionString: config.get("postgres.connectionString"),
});
client.connect();

module.exports = client;