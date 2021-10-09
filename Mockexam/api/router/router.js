const express = require('express');
const router = express.Router();
const controller = require("../controller/jobs.controller");

router.route("/jobs").get(controller.getAll);
router.route("/jobs/:id").get(controller.getOne);
router.route("/jobs").post(controller.addOne);
router.route("/jobs/:id").put(controller.updateOne);
router.route("/jobs/:id").delete(controller.deleteOne);


module.exports = router;
