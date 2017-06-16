//does a .DS_Store belong in models directory?


var express = require('express');
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cheerio = require('cheerio');
var request = require('request');

mongoose.Promise = Promise;

// CREATED EXPRESS SERVER
var app = express();

// HANDLEBARS MIDDLEWARE
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// BODY PARSER
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json({ type: 'application/*+json' }))

// MAKE PUBLIC FOLDER THE STATIC DIRECTORY
app.use(express.static(__dirname + "/public"));

// CONNECT WITH MONGOOSE
mongoose.connect("mongodb://localhost/high_times_scraper");
var db = mongoose.connection;

// CHECK FOR ERROR ON CONNECTION
db.on("error", function(error) {
  console.log("Mongoose Error: " + error);
});

// CHECK FOR SUCCESSFUL CONNECTION
db.on("open", function() {
  console.log("Mongoose connection successful");
});

// GET ROUTE FOR HOME
app.get("/", function(req, res) {
  res.send("HOME PAGE");
});

// LISTEN ON PORT
app.listen(8080, function() {
  console.log("App running on port 8080");
});
