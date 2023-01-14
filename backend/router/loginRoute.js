const express = require("express");
const { loginCheck, register } = require("../controller/loginController");
const router = express.Router();

router.post("/login", loginCheck);
router.post("/register", register);
module.exports = router;
