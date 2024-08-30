const express = require("express");
const {
  registerController,
  loginController,
  currentUserController,
} = require("../contrroller/authcontroller");
const authMiddelware = require("../middelewares/authMiddelware");

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/currentUser", authMiddelware, currentUserController);

module.exports = router;
