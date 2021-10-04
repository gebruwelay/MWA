const express = require("express");
const router = express.Router()

const controller = require("../controller/games")
const pubctrl = require("../controller/publisherController");

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

router.route("/games/:id/publisher")
      .get(pubctrl.get);
router.route("/games/:id/publisher")
      .post(pubctrl.add);
router.route("/games/:id/publisher")
      .put(pubctrl.update);
router.route("/games/:id/publisher")
      .delete(pubctrl.delete);
module.exports= router;