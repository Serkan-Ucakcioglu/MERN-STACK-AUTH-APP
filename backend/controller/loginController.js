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

    const checkPass = await bcrypt.compare(password, checkuser.password);

    if (!checkPass) return res.status(404).json("error");

    let accesstoken;
    if (checkPass) {
      accesstoken = jwt.sign({ id: checkuser._id }, process.env.ACCESS_TOKEN, {
        expiresIn: "1m",
      });
    }
    const refresh = jwt.sign({ id: checkuser._id }, process.env.REFRESH_TOKEN);

    res.cookie("jwt", refresh, {
      httpOnly: true,
      sameSite: "None",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({ accessToken: accesstoken });
  } catch (error) {
    console.log(error, "error");
  }
};

const refresh = async (req, res) => {
  try {
    const cookie = req.cookies;
    console.log(cookie);
    if (!cookie.jwt) return res.status(404).json("token please");

    const refresh = cookie.jwt;

    jwt.verify(refresh, process.env.REFRESH_TOKEN, async (err, decoded) => {
      if (err) {
        return res.status(404).json(err);
      }
      const user = await Users.findOne({ _id: decoded.id });

      if (!user) return res.status(404).json("no user");

      const access = jwt.sign({ id: user._id }, process.env.ACCESS_TOKEN, {
        expiresIn: "15h",
      });
      return res.json(access);
    });
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "log out " });
};

module.exports = {
  loginCheck,
  register,
  refresh,
  logout,
};
