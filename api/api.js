/**
 * This simple javascript file allows to stand a simple api to do local development.
 * 
 * Requires nodeJS.
 * 
 * Endpoints:
 *  - http://localhost:8125/api/customers
 *    Returns a fixed json object with two customers to be used via a simple GET request.
 * 
 *  - http://localhost:8125/api/create-customer
 *    Receives a POST request and returns a json object with the success message
 * 
 *  - http://localhost:8125/
 *    Displays a simple html page
 * 
 *  To run it simply run the following command at the root of this file (will start 
 *  by default on port 8125 but you can change it easily with the variable serverPort):
 *  $ node server.js
 */

const http = require("http");
const fs = require("fs");
const qs = require("querystring");
const serverPort = 8125;

http
  .createServer(function(req, res) {
    const URL = req.url;
    switch (URL) {
      case "/api/customers":
        res.writeHead(200, { "Content-Type": "application/json" });
        const customers = [
          {
            firstname: "Karsten",
            lastname: "Horn"
          },
          {
            firstname: "Maria",
            lastname: "Sharapova"
          }
        ];
        res.end(JSON.stringify(customers));
        break;
      case "/api/create-customer":
        if (req.method === "POST") {
          let requestBody = "";
          req.on("data", data => {
            requestBody += data;
            console.info(requestBody);
          });

          req.on("end", () => {
            const formData = qs.parse(requestBody);
            res.writeHead(200, { "Content-Type": "application/json" });
            const ok = { ok: "Customer created" };
            res.end(JSON.stringify(ok));
          });
        } else {
          res.writeHead(405, "Method Not Supported", {
            "Content-Type": "application/json"
          });
          const error = { "405": "Method Not Supported" };
          res.end(JSON.stringify(error));
        }
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
