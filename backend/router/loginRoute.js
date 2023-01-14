const express = require("express");
const {
  loginCheck,
  register,
  refresh,
} = require("../controller/loginController");
const router = express.Router();

router.post("/login", loginCheck);
router.post("/register", register);
router.post("/refresh", refresh);
module.exports = router;
