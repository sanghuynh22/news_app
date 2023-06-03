const express = require("express");
const router = express.Router();
const fastnewsController = require("../controllers/fastNewsController");

router.get("/", fastnewsController.getAllFastNews);
router.get("/:id", fastnewsController.getFastNewsById);
router.post("/", fastnewsController.createFastNews);

module.exports = router;
