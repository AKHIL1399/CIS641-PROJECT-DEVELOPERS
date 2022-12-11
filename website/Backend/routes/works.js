const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const _ = require("lodash");
const { Work } = require("../models/work");
const { hasing } = require("../helpers/hash");
const mongoose = require("mongoose");
const router = express();

router.get("/:id", async (req, res) => {
  const work = await Work.find({ userid: req.params.id });
  if (!work) return res.status(404).send("No work exist.");
  res.send(work);
});
router.post("/", async (req, res) => {
  const works = await Work.findOne({ date: req.body.date });
  // if (works) return res.status("400").send({ error: "Shift Alrady Satred." });
  if (!works) {
    let work = new Work({
      userid: req.body.userid,
      workingHours: 0,
      brakHours: 0,
      startTime: req.body.userid,
    });
    work = await work.save();
    res.send(work);
  } else {
    if (req.body.staus == "break") {
      const work = await Work.findByIdAndUpdate(
        works._id,
        _.pick(req.body, ["isActive"]),
        { new: true }
      );
      if (!program) res.status(404).send({ error: "No user exist." });
      res.send(program);
    }
  }
});
router.get("/startshift/:id", async (req, res) => {
  var date = new Date().toISOString().split("T")[0];
  console.log(date);
  const works = await Work.findOne({
    userid: req.params.id,
    date: date,
  });
  if (works) return res.status("400").send({ error: "Shift Alrady Satred." });
  if (!works) {
    let work = new Work({
      userid: req.params.id,
      workingHours: 0,
      brakHours: 0,
      date: date,
    });
    work = await work.save();
    res.send(work);
  }
});
router.get("/startbreak/:id", async (req, res) => {
  var date = new Date().toISOString().split("T")[0];
  const works = await Work.findOne({ userid: req.params.id, date: date });
  if (!works) return res.status("400").send({ error: "Shift not satred yet." });
  if (works) {
    const hours = Math.abs(new Date() - works.startTime) / 36e5;
    const workingHours = hours - works.brakHours;
    console.log(hours);
    const work = await Work.findByIdAndUpdate(
      works._id,
      { workingHours: workingHours, breakStartTime: new Date() },

      { new: true }
    );
    if (!work) res.status(404).send({ error: "No data exist." });

    res.send(work);
  }
});
router.get("/endbreak/:id", async (req, res) => {
  var date = new Date().toISOString().split("T")[0];
  const works = await Work.findOne({ userid: req.params.id, date: date });
  if (!works) return res.status("400").send({ error: "Shift not satred yet." });
  if (!works.breakStartTime)
    return res.status("400").send({ error: "You have to start break first" });
  if (works) {
    const hours = Math.abs(new Date() - works.breakStartTime) / 36e5;
    const breakHours =
      parseFloat(hours) + parseFloat(works.brakHours ? works.brakHours : 0);
    console.log(breakHours);
    const work = await Work.findByIdAndUpdate(
      works._id,
      { brakHours: breakHours, breakStartTime: null },

      { new: true }
    );
    if (!work) res.status(404).send({ error: "No data exist." });

    res.send(work);
  }
});
router.get("/endshift/:id", async (req, res) => {
  var date = new Date().toISOString().split("T")[0];
  const works = await Work.findOne({ userid: req.params.id, date: date });
  if (!works) return res.status("400").send({ error: "Shift not satred yet." });
  if (works) {
    const hours = Math.abs(new Date() - works.startTime) / 36e5;
    const workingHours = hours - works.brakHours;
    console.log(hours);
    const work = await Work.findByIdAndUpdate(
      works._id,
      { workingHours: workingHours, breakStartTime: new Date() },

      { new: true }
    );
    if (!work) res.status(404).send({ error: "No data exist." });

    res.send(work);
  }
});

module.exports = router;
