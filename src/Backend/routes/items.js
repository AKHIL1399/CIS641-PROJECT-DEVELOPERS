const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const _ = require("lodash");
const { Item } = require("../models/item");
const router = express();

router.get("/", async (req, res) => {
  console.log("api is calling ")
  const items = await Item.find().sort("imageUrl");
  console.log(items)

  res.send(_.map(
    items,
    _.partialRight(_.pick, [
      "_id",
      "name",
      "price",
      "discPrice",
      "category",
      "subCategory",
      "material",
      "detail",
      "imageUrl",
    ])
  )
  )
});
router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).send({ error: "No item fond." });
  res.send(
    _.pick(item, [
      "_id",
      "name",
      "price",
      "discPrice",
      "category",
      "subCategory",
      "material",
      "detail",
      "imageUrl",
    ])
  );
});
router.post("/", async (req, res) => {
  
  let item = new Item(
    _.pick(req.body, [
      "name",
      "price",
      "discPrice",
      "category",
      "subCategory",
      "material",
      "detail",
      "imageUrl",
    ])
  );
  item = await item.save();
  res
    .send(
      item
    );
});

module.exports = router;
