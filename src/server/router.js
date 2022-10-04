var controller = require("./controller");
const router = require("express").Router();

router.get("/", controller.coins.listCoins);

router.post("/:id/:coinName/:favorite", controller.coins.updateCoins);

module.exports = router;
