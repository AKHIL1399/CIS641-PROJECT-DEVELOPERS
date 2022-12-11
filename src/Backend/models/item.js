const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  discPrice: {
    type: Number,
  },
  category: {
    type: Number,
  },
  subCategory: {
    type: Number,
  },
  material: {
    type: String,
  },
  detail: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
  purchaseDate: {
    type: Date,
  },
  total: {
    type: Number,
  },

  createdDate: { type: Date, default: Date.now },
});

const Item = mongoose.model("Items", itemSchema);

function validateItem(item) {
  const schema = {
    name: Joi.string().min(5).max(255).required(),
    price: Joi.number().required(),
    discPrice: Joi.number(),
    category: Joi.number(),
    subCategory: Joi.number(),
    material: Joi.string(),
    detail: Joi.string(),
    imageUrl: Joi.string(),
  };
  return Joi.validate(item, schema);
}

exports.Item = Item;
exports.Validate = validateItem;
