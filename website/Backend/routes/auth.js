const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const _ = require("lodash");
const { User } = require("../models/user");

const mongoose = require("mongoose");
const router = express();

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) return res.status("400").send({ error: error.details[0].message });
  const user = await User.findOne({ email: req.body.email });

  if (!user)
    return res.status("400").send({ error: "Invalid email or password." });
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status("400").send({ error: "Invalid email or password." });
  // if (!user.isActive)
  //   return res.status("400").send({ error: "User is restricted by admin." });
  const token = user.generateAuthToken();
  res.status(200).send(user);
});
function validateUser(user) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(55).required(),
  };
  return Joi.validate(user, schema);
}
module.exports = router;
