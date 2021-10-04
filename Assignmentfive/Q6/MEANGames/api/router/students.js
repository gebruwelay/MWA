const express = require("express");
const router = express.Router()

const controller = require("../controller/students")

router.route("/students")
      .get(controller.getAll) ;
router.route("/students/:id")
      .get(controller.getOne);
router.route("/students")
      .post(controller.create);
router.route("/students/:id")
      .put(controller.edit);
router.route("/students/:id")
      .delete(controller.delete);
module.exports= router;