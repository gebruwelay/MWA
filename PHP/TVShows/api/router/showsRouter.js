
const express = require("express");
const router = express.Router()
const controller = require("../controller/showsController")
const seasonRouter= require("./seasonRouter");

router.route("/shows")
      .get(controller.getAll) ;
router.route("/shows/:id")
      .get(controller.getOne);
router.route("/shows")
      .post(controller.create);
router.route("/shows/:id")
      .put(controller.edit);
router.route("/shows/:id")
      .delete(controller.delete);
router.use("/shows",seasonRouter)
module.exports= router;