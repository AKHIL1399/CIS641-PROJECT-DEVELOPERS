const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const config = require("config");

const workSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
  workingHours: {
    type: Number,
  },
  brakHours: {
    type: Number,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  breakStartTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
    default: Date.now,
  },
  date: { type: Date },

  createdDate: { type: Date, default: Date.now },
});

const work = mongoose.model("Work", workSchema);

function validateWork(work) {
  const schema = {
    userid: Joi.objectId().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().required(),
    date: Joi.date().required(),
  };
  return Joi.validate(work, schema);
}

exports.Work = work;
exports.Validate = validateWork;
