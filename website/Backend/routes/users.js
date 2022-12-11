const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const _ = require("lodash");
const { User, Validate, ValidateUpdate } = require("../models/user");
const { hasing } = require("../helpers/hash");
const mongoose = require("mongoose");
const router = express();

router.get("/me", auth, async (req, res) => {
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).send({ error: "No user exist." });
  res.send(
    _.pick(user, ["_id", "name", "email", "dob", "phoneNumber", "isAdmin"])
  );
});
router.get("/", async (req, res) => {
  const users = await User.find({ isAdmin: false }).sort("name");
  res.send(
    users
  );
});
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).send({ error: "No user exist." });
  res.send(
    _.pick(user, [
      "_id",
      "name",
      "email",
      "gender",
      "dob",
      "phoneNumber",
      "isAdmin",
      "address",
    ])
  );
});
router.post("/", async (req, res) => {
  const { error } = Validate(req.body);
  if (error) return res.status("400").send({ error: error.details[0].message });
  const users = await User.findOne({ email: req.body.email });

  if (users)return res.status("400").send({ error: "User already registered." });
  let user = new User(
    _.pick(req.body, [
      "firstName",
      "lastName",
      "email",
      "password",
      "phoneNumber",
      "address",
    
    ])
  );
  user.password = await hasing(user.password);
  user = await user.save();
  const token = user.generateAuthToken();
  res
    .header("x-auth-token", token)
    .send(
      _.pick(user, ["_id","firstName",
      "lastName",
      "email",
      "password",
      "phoneNumber",
      "address",
       "isAdmin"])
    );
});
router.put("/:id", async (req, res) => {
  const { error } = ValidateUpdate(req.body);
  if (error) return res.status("400").send(error.details[0].message);
  const user = await User.findByIdAndUpdate(
    req.params.id,
    _.pick(req.body, ["name", "dob", "phoneNumber", "isAdmin", "address"]),

    { new: true }
  );
  if (!user) res.status(404).send({ error: "No user exist." });

  res.send(
    _.pick(user, [
      "_id",
      "name",
      "email",
      "dob",
      "phoneNumber",
      "isAdmin",

      "address",
    ])
  );
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndRemove(req.params.id);
  if (!user) res.status(404).send({ error: "No user exist." });
  res.send(
    _.pick(user, ["_id", "name", "email", "dob", "phoneNumber", "isAdmin"])
  );
});
module.exports = router;
