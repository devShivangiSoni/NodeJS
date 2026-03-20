//Creating a server using NodeJS

//1. Import http library/module

const http = require("http");

//2. Create server

const server = http.createServer((req, res) => {
  //here comes the request
  res.end("Welcome to NodeJS Server");
});

//specilfy the port to listen the client reqest
server.listen(3100, () => {
  console.log("server running on 3100");
});
