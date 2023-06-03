const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.post("/", userController.createUser);

module.exports = router;
