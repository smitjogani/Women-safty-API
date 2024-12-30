const express = require("express");
const router = express.Router();
const selfDefenceController = require("../../controller/selfDefence/selfDefencePost.controller")

router.post("/createSelfDefencepost", selfDefenceController.createSelfDefencePost);
router.get("/getAllSelfDefencePosts", selfDefenceController.getAllSelfDefencePost);
router.delete("/deleteSelfDefencePost/:id", selfDefenceController.deleteSelfDefencePost);
router.get("/getSelfDefencePostById/:id", selfDefenceController.findSelfDefencePostById);

module.exports = router;