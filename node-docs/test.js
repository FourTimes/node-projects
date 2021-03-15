const express = require("express");
const app = express();
const fs = require("fs");
const morgan = require("morgan");
const path = require("path");
const helmet = require("helmet");
const debug = require("debug")("app:startup");
const pug = require("pug");
const winston = require("winston");
const cors = require("cors");
var cookieSession = require('cookie-session');

app.set('trust proxy', 1)
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

//custom modules

const ignorefavicon = require("./middleware/ignorefavicon");
const sports = require("./routes/sports");
const players = require("./routes/players");
const datas = require("./routes/datas");
const post = require("./routes/post")

// setting up variables

app.set("view engine", "pug");
app.set("views", "./views");

// Call middleware functions

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(helmet());
app.disable("etag");
app.use(ignorefavicon);
app.use(cors());

// call Routesgoogle>
app.use("/api/sports", sports);
app.use("/api/players", players);
app.use("/api/datas", datas);
app.use("/api/post", post);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log(`${app.get("env")}`);
  debug("Morgan debug enabled");
}


var accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));



app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'Application/json')
  res.setHeader('Cache-Control', 'no-cache')
  res.render("index", {
    title: "demo-app",
    message: "this is first node api server",
  });
});



const port = process.env.PORT || 9000;
debug(port);

app.listen(port, () => {
  console.info("node server listening on " + `${port}`);
  debug("node server listening on " + `${port}`);
});
