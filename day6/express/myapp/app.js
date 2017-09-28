var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var menu = require('./routes/menu');
var category = require('./routes/category');

var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test2', { useMongoClient: true, promiseLibrary: global.Promise });

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/menu', menu);
app.use('/category', category);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error(req.path+ ' Not Found');
  err.status = 404;
  next(err);
});
// error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({ code: err.status || 500 , data: err.message});
});

module.exports = app;
