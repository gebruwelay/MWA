const express = require("express");
const router = express.Router()
const seasonctrl = require("../controller/seasonController");
router.route("/:id/seasons")
      .get(seasonctrl.get);
router.route("/:id/seasons/:seasonID")
      .get(seasonctrl.getOne);
router.route("/:id/seasons")
      .post(seasonctrl.add);
router.route("/:id/seasons/:seasonID")
      .put(seasonctrl.update);
router.route("/:id/seasons/:seasonID")
      .delete(seasonctrl.delete);

module.exports= router;