var http = require('http');
var ports = 8080;
http.createServer(function (req, res) {
	res.write('Hello TRUE INCUBE APP BUILDER!');
	res.end();
}).listen(ports);