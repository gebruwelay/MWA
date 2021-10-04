const express = require("express");
const router = express.Router()

const controller = require("../controller/students")

router.route("/students")
      .get(controller.getAll) ;
router.route("/students/:id")
      .get(controller.getOne);
module.exports= router;