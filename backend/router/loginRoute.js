const express = require("express");
const authToken = require("../middleware/authtoken");
const {
  loginCheck,
  register,
  refresh,
} = require("../controller/loginController");
const router = express.Router();

router.post("/login", loginCheck);
router.post("/register", register);
router.post("/refresh", authToken, refresh);
module.exports = router;
