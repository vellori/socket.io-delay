# socket.io-delay
Dealing with Socket.emit delays

# Requisites

You will need to install socket.io to try this example, so:
- clone repo
- npm install socket.io
- npm install socket.io-client (dunno if you need to do it, I did)

# Try these examples, the delayed Emit version
Open two terminal window A and B, keep both visible on the screen as you will need to check both at the same time:
- terminal A: $ node server.js
- terminal B: $ node client.js

On terminal B you will see a sequence of numbers, in the meanwhile nothing will show on termina A. When the number sequence ends in terminal B you will see both event1 and event2 messages in terminal A

# Try the other examples, the real time Emit version
CTRL-C terminal A and terminal B because all examples use the same port and cannot be run altogether and this time run:
- A: $ node server2.js
- B: $ node client2.js

Verify that event1 is sent before the number sequences finishes, and then event2 is received at the end.
