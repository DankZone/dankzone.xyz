// server.js
// where your node app starts

// init project
const express = require('express');
const app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Configure view engine to render EJS templates.
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// http://expressjs.com/en/starter/basic-routing.html
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express
app.get('/', function(request, response) {
  response.render('index', {foo: 'FOO'});
});

app.get('/home', function(request, response) {
  response.render('index', {foo: 'FOO'});
});

app.get('/about', function(request, response) {
  response.render('about', {foo: 'FOO'});
});

app.get('/donate', function(request, response) {
  response.render('donate', {foo: 'FOO'});
});

app.get('/mcserver', function(request, response) {
  response.render('mcserver', {foo: 'FOO'});
});

app.get('/bots/mee6', function(request, response) {
  response.render('mee6', {foo: 'FOO'});
});

app.get('/bots', function(request, response) {
  response.render('bots', {foo: 'FOO'});
});

app.get('/thank-you', function(request, response) {
  response.render('thankyou', {foo: 'FOO'});
});




// Redirect unused URLs to the 404 page
app.get('*', function(request, response) {
  response.render('404', {foo: 'FOO'});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});