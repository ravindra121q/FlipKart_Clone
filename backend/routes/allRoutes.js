const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { userModel } = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth_middleware");
router.get("/", (req, res) => {
  return res.send("Well Done");
  console.log("all routes");
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await userModel.findOne({ email, name });
  if (userExists) {
    return res.send("User already exists");
  }
  try {
    bcrypt.hash(password, 4, (err, hash) => {
      const user = new userModel({ name, email, password: hash });
      user.save();
      return res.send("User created");
    });
  } catch (error) {
    return res.send(error);
  }
});

router.post("/login", auth, async (req, res) => {
  const { email, password } = req.body;
  const userExists = await userModel.findOne({ email });
  console.log(userExists);
  if (userExists) {
    bcrypt.compare(password, userExists.password, (err, result) => {
      if (result) {
        const token = jwt.sign({ id: userExists._id }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        return res.send(token);
      }
    });
  }
});

module.exports = { router };
