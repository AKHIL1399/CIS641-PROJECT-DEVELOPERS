const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const blogSchema = new mongoose.Schema({
  tittle: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  heading: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  detail: {
    type: String,
    required: true,
    minlength: 5,
    trim: true,
  },
  tags: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  tittleImage: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  silderFirstImage: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  silderSecoundImage: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },
  silderThirdImage: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
    trim: true,
  },

  isActive: {
    type: Boolean,
    default: true,
  },
  createdDate: { type: Date, default: Date.now },
});

const blog = mongoose.model("Blogs", blogSchema);

function validateBlog(blog) {
  const schema = {
    tittle: Joi.string().min(5).max(255).required(),
    category: Joi.string().min(5).max(255).required(),
    heading: Joi.string().min(5).max(255).required(),
    detail: Joi.string().min(5).required(),
    tags: Joi.string().min(5).max(255).required(),
  };
  return Joi.validate(blog, schema);
}

exports.Blog = blog;
exports.Validate = validateBlog;
