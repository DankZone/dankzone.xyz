const express = require("express");
const app = express();
const fs = require("fs");
const marked = require("marked");

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// Configure view engine to render EJS templates.
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

// http://expressjs.com/en/starter/basic-routing.html
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.get("/", function(request, response) {
  response.render("index");
});

app.get("/home", function(request, response) {
  response.render("index");
});

app.get("/about", function(request, response) {
  response.render("about");
});

app.get("/team", function(request, response) {
  response.render("team");
});

app.get("/team/leo", function(request, response) {
  response.redirect("https://leodoesthings.tk");
});

app.get("/donate", function(request, response) {
  response.render("donate");
});

app.get("/mcserver", function(request, response) {
  response.render("mcserver");
});

app.get("/bots", function(request, response) {
  response.render("bots");
});

app.get("/thank-you", function(request, response) {
  response.render("thankyou");
});

app.get("/support", function(request, response) {
  response.redirect("https://dankzone.freshdesk.com");
});

// Load terms of service and privacy policy
app.get("/terms", function(req, res) {
  var path = __dirname + "/public/legal/TERMS-v2.md";
  var file = fs.readFileSync(path, "utf8");
  res.send(marked(file.toString()));
});

app.get("/privacy", function(req, res) {
  var path = __dirname + "/public/legal/PRIVACY-v2.md";
  var file = fs.readFileSync(path, "utf8");
  res.send(marked(file.toString()));
});

// Redirect unused URLs to the 404 page
app.get("*", function(request, response) {
  response.render("404");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
