const Users = require("../model/loginModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const check = await Users.findOne({ username });
    if (check) return res.status(404).json("already user");

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await Users.create({
      username,
      password: hashedPassword,
    });
    return res.status(201).json({ message: "success create user", username });
  } catch (error) {
    console.log(error);
  }
};

const loginCheck = async (req, res) => {
  try {
    const { username, password } = req.body;
    const checkuser = await Users.findOne({ username });

    if (!checkuser) return res.status(404).json("No user");

    const checkPass = bcrypt.compare(password, checkuser.password);
    let accesstoken;
    if (checkPass) {
      accesstoken = jwt.sign({ id: checkuser._id }, process.env.ACCESS_TOKEN);
    }
    return res.status(200).json({ accessToken: accesstoken });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  loginCheck,
  register,
};
