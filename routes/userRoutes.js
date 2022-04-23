const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.User;
const verifyAdmin = require("../middleware/adminVerifyJWT");

router.post("/register", verifyAdmin, async (req, res) => {
  try {
    console.log(req.body);
    if (!req.body.username) {
      return res.status(400).json({ message: "Unesite korisnicko ime" });
    }
    if (!req.body.password) {
      return res.status(400).json({ message: "Unesite sifru" });
    }
    const user = await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 10),
      role_id: 2,
    });
    if (user) {
      return res.status(200).json({ message: "Uspjesna registracija" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
