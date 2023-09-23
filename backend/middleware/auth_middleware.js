const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

  console.log(decoded);
  next();
};

module.exports = auth;
