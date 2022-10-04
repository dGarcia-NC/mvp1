var express = require("express");
var morgan = require("morgan");
var cors = require("cors");
const router = require("./router");
var app = express();

app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);
app.use(express.json());

app.use("/", router);

app.listen(3001);
console.log("Listening on port 3001");
