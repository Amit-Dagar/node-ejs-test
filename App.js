require("dotenv").config();
require("module-alias/register");

const express = require("express");
const cors = require("cors");
const path = require("path");

// define global variables
env = module.exports = process.env;
rootDir = module.exports = __dirname;

// initialize server & express app
const app = express();
app.use(cors());

// set the view engine to ejs
app.set("view engine", "ejs");

// if url includes css, js, img, fonts, etc. then serve static files
// Set the 'public' directory as the location for static files
app.use(
  express.static(path.join(__dirname, "public"), {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

// index page
app.get("/", function (req, res) {
  res.render("index");
});

// start server
app.listen(env.PORT, () => {
  console.info("--------------------------------------------");
  if (env.DEBUG === "OFF") console.log = function () {};
  console.info(`🟢 Server Listening at port ${env.PORT}.`);
  console.info("--------------------------------------------");
});
