var mysql = require("mysql2");

var connection = mysql.createConnection({
  user: "root",
  password: "",
  database: "coinDB",
});

module.exports = connection;
