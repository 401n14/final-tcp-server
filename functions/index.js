const functions = require('firebase-functions');
const server = require("socket.io")();

server.on("connection", client => {
    client.on("message", socket => {
    server.emit("broadcast", {
      name: socket.name,
      message: socket.message
    });
  });
});

let PORT = functions.config().server.port || 3000;

console.log("Server listening on Port " + PORT);
exports.server = functions.https.onRequest(server);