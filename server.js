var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(8080);

function handler (req, res) {
  
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end('ciao');
  
}

io.on('connection', function (socket) {
  console.log("connection!");
  socket.on('event1', function (data) {
    console.log('event1');
  });
  socket.on('event2', function (data) {
    console.log('event2');
  });
});
