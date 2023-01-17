const jwt = require("jsonwebtoken");

const authToken = (req, res, next) => {
  const authHeader = req.header.Authorization || req.headers.authorization;

  if (!authHeader) return res.status(401).json("unauth");

  let token = authHeader.startsWith("Bearer") && authHeader.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN, (err) => {
    if (err) {
      return res.status(401).json(err);
    }
    next();
  });
};

module.exports = authToken;
