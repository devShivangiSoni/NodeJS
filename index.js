const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  const data = fs.readFileSync("index.html").toString();
  const product = fs.readFileSync("practice.html").toString();

  if (req.url == "/prod") {
    return res.end(product);
  } else if (req.url == "/user") {
    res.end(data);
  }
});

server.listen(3200, () => {
  console.log("server is running on 3200");
});
