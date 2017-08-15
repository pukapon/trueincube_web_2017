var http = require("http");
var url = require('url')
var fs = require('fs');


var server = http.createServer(function(request, response){
    
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';

    fs.readFile(filePath, function(error, content) {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content);
    });
});

server.listen(8088, function(){
    console.log('server is listening')    
});