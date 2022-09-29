var Crypto = require("../model");

module.exports = {
  listCoins: (req, res) => {
    console.log("CONTROLLER listCoins");
    Crypto.coins.getCoins((err, results) => {
      if (err) {
        res.status(500);
      } else {
        console.log("res", results);
        res.status(200).json(results);
      }
    });
  },
  updateCoins: (req, res) => {
    console.log("CONTROLLER updateCoins");
    Crypto.coins.updateCoins((err, results) => {
      if (err) {
        res.status(500);
      } else {
        console.log("update res", results);
        res.status(200).json(results);
      }
    });
  },
};
