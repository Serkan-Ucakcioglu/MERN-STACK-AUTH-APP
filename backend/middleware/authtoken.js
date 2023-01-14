const jwt = require("jsonwebtoken");

const authToken = async (req, res, next) => {
  const cookie = await req.cookies.jwta;
  console.log(req.cookies);

  if (!cookie) return res.status(401).json("unauth");

  jwt.verify(cookie, process.env.ACCESS_TOKEN, async (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(404).json(err);
    }
    next();
  });
};

module.exports = authToken;
