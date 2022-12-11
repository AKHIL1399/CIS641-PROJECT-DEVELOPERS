const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const _ = require("lodash");
const { Order, Validate } = require("../models/order");
const { hasing } = require("../helpers/hash");
const mongoose = require("mongoose");
const router = express();

router.get("/:id", async (req, res) => {
  const orders = await Order.find({
    userid: req.params.id,
  });

  res.send(orders);
});
router.get("/", async (req, res) => {
  const orders = await Order.find().populate('userid');

  res.send(orders);
});

router.post("/", async (req, res) => {
  let order = new Order(_.pick(req.body, ["products", "totalPrice", "items","userid"]));
  order = await order.save();

  res.send(order);
});

module.exports = router;
