const express = require("express");
const router = express.Router()

const controller = require("../controller/games")

router.route("/games")
      .get(controller.getAll) ;
router.route("/mul/:num1")
      .get(controller.mulDos);
module.exports= router;