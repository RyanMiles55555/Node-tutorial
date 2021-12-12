const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

server.listen(5555, () => {
  console.log("server listening on port : 5555...");
});
