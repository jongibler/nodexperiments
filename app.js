//setup web app
var express = require('express');
var app = express();

//setup db
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbuser:dbpassword@ds047114.mongolab.com:47114/experimental');

//routes
app.all('/', function (req, res) {
  res.send('Hello Cats!');
});

app.get('/cats', function (req, res) {
  res.sendFile(__dirname + '/views/cats.html');
});

app.use('/api/cats', require('./api/cats.js'));

app.use('/controllers', express.static(__dirname + '/controllers'));

//start server
app.listen(80, function () {
  console.log('Listening on port 80');
});

