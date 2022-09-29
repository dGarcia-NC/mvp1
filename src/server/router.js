var controller = require("./controller");
const router = require("express").Router();

router.get("/", controller.coins.listCoins);

router.put("/:coin_id", controller.coins.updateCoins);

module.exports = router;
