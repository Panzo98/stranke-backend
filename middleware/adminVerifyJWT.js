const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization;
  }
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.SECRET_TOKEN_ADMIN);
    req.user = verified;
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
};

module.exports = auth;
