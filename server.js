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
  response.render('index');
});

app.get('/home', function(request, response) {
  response.render('index');
});

app.get('/about', function(request, response) {
  response.render('about');
});

app.get('/donate', function(request, response) {
  response.render('donate');
});

app.get('/mcserver', function(request, response) {
  response.render('mcserver');
});

app.get('/bots', function(request, response) {
  response.render('bots');
});

app.get('/thank-you', function(request, response) {
  response.render('thankyou');
});




// Redirect unused URLs to the 404 page
app.get('*', function(request, response) {
  response.render('404', {foo: '404 page'});
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});