const express = require("express");
const router = express.Router()

const controller = require("../controller/games")
const revctrl = require("../controller/reviewController");

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

router.route("/games/:id/review")
      .get(revctrl.get);
router.route("/games/:id/review")
      .post(revctrl.add);
router.route("/games/:id/review")
      .put(revctrl.update);
router.route("/games/:id/review")
      .delete(revctrl.delete);
module.exports= router;