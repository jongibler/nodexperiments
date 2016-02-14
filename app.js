//setup web app
var express = require('express');
var app = express();

//setup db
var mongoose = require('mongoose');
mongoose.connect('mongodb://dbuser:dbpassword@ds047114.mongolab.com:47114/experimental');

//index route
app.all('/', function (req, res) {
  res.send('Hello Cats!');
});

//cats api route
app.use('/api/cats', require('./api/cats.js'));

app.listen(80, function () {
  console.log('Listening on port 80');
});

