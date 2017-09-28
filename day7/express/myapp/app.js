var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// ==================== UPLOAD FILE  ====================

app.post("/upload_base64", function(req, res) {
  var img_string = req.body.img;
  var img = new Buffer(img_string.split(",")[1], 'base64');

  res.writeHead(200, {
     'Content-Type': 'image/png',
     'Content-Length': img.length
  });

  res.end(img); 
});
const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.post('/upload_multipart', function(req, res) {
  res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': req.files.foo.data.length
  });
  res.end(req.files.foo.data);  
});

// ==================== JWT SECTION ====================

var jwt = require('jwt-express');
app.use(jwt.init('secret', {stales : 2000}));
app.get('/active', jwt.active(), function(req, res) { 
  res.send({code:0}) 
});

app.get('/admin', jwt.require('admin'), function(req, res) { 
  res.send({code:0}) 
});

app.get('/login', function(req, res) {
  var user = {
      is_admin: true,
      name: "foo bar"
  }
  var jwt = res.jwt({
      admin: user.is_admin,
      name: user.name
  });
  console.log(jwt);
  res.send(jwt.token);
});

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
