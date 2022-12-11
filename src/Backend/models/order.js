const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const orderSchema = new mongoose.Schema({


  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },

totalPrice:{
type:Number,
},
products:{
  type:Number,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
  items:[
    {
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
      createdDate: { type: Date, default: Date.now },
    }
  ],
  createdDate: { type: Date, default: Date.now },
});

const order = mongoose.model("Orders", orderSchema);

function validateDoc(doc) {
  const schema = {
    tittle: Joi.string().min(5).max(255).required(),
    userid: Joi.objectId().required(),
    path: Joi.string().min(5).max(255).required(),
    description: Joi.string().required(),
  };
  return Joi.validate(doc, schema);
}

exports.Order = order;
exports.Validate = validateDoc;
