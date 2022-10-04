const client = require("../db");

module.exports = {
  getCoins: (params) => {
    console.log("MODELS inside getCoins");
    let getCoins = `SELECT * FROM coins`;
    return client.query(getCoins, params);
  },
  updateCoins: (params) => {
    console.log("MODELS inside update coins", params);
    var putCoins = `INSERT INTO coins (id, coinName, favorite)
VALUES (?, ?, ?);`;
    return client.query(putCoins, params);
  },
};
