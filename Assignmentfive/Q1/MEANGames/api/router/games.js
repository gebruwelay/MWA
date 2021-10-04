const express = require("express");
const router = express.Router()

const controller = require("../controller/games")

router.route("/games")
      .get(controller.getAll) ;
router.route("/games/:id")
      .get(controller.getOne);
module.exports= router;