const express = require("express");
const app = express();

//http server
const http = require("http").Server(app);

// socket.io
const io = require("socket.io")(http);

//routes
app.use(require("./routes/routes"));

//html
app.use(express.static(__dirname + "/public"));

io.on("connection", (socket) => {
  socket.on("stream", (image) => {
    socket.broadcast.emit("stream", image);
  });
});

module.exports = http;
