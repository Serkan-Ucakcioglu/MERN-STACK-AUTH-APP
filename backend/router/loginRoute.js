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
router.get("/refresh", refresh);
router.post("/logout", authToken, logout);
router.post("/test", authToken, (req, res) => {
  res.status(200).json("testing success");
});

module.exports = router;
