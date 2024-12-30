const express = require("express");
const router = express.Router();
const mediCareController = require("../../controller/medicare/mediCare.controller")

router.post("/createMedicarePost", mediCareController.createMedicarePost);
router.get("/getAllMedicarePosts", mediCareController.getAllMedicarePost);
router.delete("/deleteMedicarePost/:id", mediCareController.deleteMedicarePost);
router.get("/getMedicarePostById/:id", mediCareController.findMedicarePostById);

module.exports = router;