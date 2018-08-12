const http = require("http");
const fs = require("fs");
const serverPort = 8125;

http
  .createServer(function(req, res) {
    const URL = req.url;
    switch (URL) {
      case "/api":
        res.writeHead(200, { "Content-Type": "application/json" });
        const obj = {
          firstname: "Karsten Luis",
          lastname: "Horn Jiménez"
        };
        res.end(JSON.stringify(obj));
        break;
      case "/":
        fs.createReadStream(__dirname + "/index.htm").pipe(res);
        break;
      default:
        res.writeHead(404);
        res.end();
    }
  })
  .listen(serverPort);
  console.info(`Server running at localhost:${serverPort}`);
