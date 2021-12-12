const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("welcome to our home page");
  }
  if (req.url === "/about") {
    res.write("here is our short history");
  }
  res.end(`
    <h1>Oops!</h1>
    <p>Can't find the page that you are looking for</p>
    <a href='/'>Home</a>
  `);
});

server.listen(5005);
