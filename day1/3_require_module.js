var http = require('http');
var course = require('./my_module');
var upperCase = require('upper-case')

var server = http.createServer(function (req, res) {
  res.end(upperCase(course.myCourse()));
})


server.listen(8080, function(){
  console.log('server is listening')
});


