const express = require("express");
const {
  loginCheck,
  register,
  refresh,
  logout,
} = require("../controller/loginController");
const authToken = require("../middlewarte/authtoken");
const router = express.Router();

router.post("/login", loginCheck);
router.post("/register", register);
router.post("/refresh", refresh);
router.post("/logout", authToken, logout);

module.exports = router;
