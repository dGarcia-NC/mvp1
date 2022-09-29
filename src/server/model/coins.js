const client = require("../db");

module.exports = {
  getCoins: (params) => {
    console.log("MODELS inside getCoins");
    let getCoins = `SELECT * FROM coins`;
    return client.query(getCoins, params);
  },
  updateCoins: (params) => {
    console.log("MODELS inside update coins");
    var putCoins = `select * from coins`;
    return client.query(putCoins, params);
  },
};
