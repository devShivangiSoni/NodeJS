//Creating a server using NodeJS

//1. Import http library/module

const http = require("http");

//2. Create server

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.write("Welcome to my application ");

  if (req.url == "/product") {
    return res.end("This is product page");
  } else if (req.url == "/user") {
    res.end("This is user page");
  }

  //here comes the request
  res.end("Welcome to NodeJS Server");
});

//specilfy the port to listen the client reqest
server.listen(3100, () => {
  console.log("server running on 3100");
});
