const express = require("express");
const router = express.Router()

const controller = require("../controller/games")

router.route("/games")
      .get(controller.getAll) ;
router.route("/games/:id")
      .get(controller.getOne);
router.route("/games")
      .post(controller.create);
router.route("/games/:id")
      .put(controller.edit);
router.route("/games/:id")
      .delete(controller.delete);

module.exports= router;