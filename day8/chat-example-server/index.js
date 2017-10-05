var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 3000;

io.on('connection', function(socket) {
    console.log("connected")
    socket.on('chat message', function(msg) {
        console.log("chat message", msg)
        io.emit('chat message', msg);
    });

    socket.on('error', (error) => {
      console.log("chat message", "error")
    });
    socket.on('disconnect', (reason) => {
      console.log("chat message", "disconnect")
    });


});

var chat = io
  .of('/chat')
  .on('connection', function (socket) {
    socket.emit('a message', {
        that: 'only'
      , '/chat': 'will get'
    });
    chat.emit('a message', {
        everyone: 'in'
      , '/chat': 'will get'
    });
  });


http.listen(port, function() {
    console.log('listening on *:' + port);
});

