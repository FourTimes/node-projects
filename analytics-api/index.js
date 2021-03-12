const express = require("express");
const app = express();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

let Headers = require("./middleware/Header");
let Logs = require("./middleware/Logs");
let notFound = require("./middleware/404");
let getConnection = require("./dbconnection/connection-dev");

app.get("/", (req, res) => {
  res.send("Hello World");
});

/*
Middleware Function
 */

app.use(Logs);
app.use("/*", Headers);

/*
Routes
 */

/*
Disable Headers
 */
app.disable("x-powered-by");
app.disable("etag");

/*
404 Error Page Redirect
 */

app.use(notFound);

/*
Listen Ports
 */

const port = 8080;
app.listen(port, () => {
  console.log(`App listening on port port! ${port}`);
});
