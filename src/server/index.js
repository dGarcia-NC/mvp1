var express = require("express");
var morgan = require("morgan");
const router = require("./router");
var app = express();

app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());

app.use("/", router);

app.listen(3000);
console.log("Listening on port 3000");
