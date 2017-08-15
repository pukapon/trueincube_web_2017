var http = require('http');
var url = require('url');

var server = http.createServer(function (req, res) {

  // https://nodejs.org/api/url.html#url_url_parse_urlstring_parsequerystring_slashesdenotehost
  var queryData = url.parse(req.url, true).query;
  
  res.end('Hello, '+queryData.name);
})


server.listen(8080, function(){
  console.log('server is listening')
});
