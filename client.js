var io = require('socket.io-client')
var socket = io('http://localhost:8080');  
socket.emit('event1', { my: 'data' });

for (var i=0; i<100000;i++ ) {
 console.log(i)
}
socket.emit('event2', { my: 'data' });

