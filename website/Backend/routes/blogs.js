const auth = require("../middleware/auth");
const admin = require("../middleware/admin");
const express = require("express");
const _ = require("lodash");
const { Blog, Validate } = require("../models/blog");
const { hasing } = require("../helpers/hash");
const mongoose = require("mongoose");
const router = express();
var aws = require("aws-sdk");
const Multer = require("multer");
var multerS3 = require("multer-s3");

var s3 = new aws.S3({
  accessKeyId: "AKIASWQCFQAOOEMHEJ6V",
  secretAccessKey: "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",
});
const storage = Multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./blog_Images/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") +
        file.originalname.replace(/ /g, "_")
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF are allowed"), false);
  }
};
const upload = Multer({ storage: storage, fileFilter: fileFilter });

var uploadS3 = Multer({
  storage: multerS3({
    s3: s3,
    bucket: "emswebassignment",
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(
        null,
        new Date().toISOString().replace(/:/g, "-") +
          file.originalname.replace(/ /g, "_")
      );
    },
  }),
});
const multipleFileUpload = uploadS3.fields([
  { name: "tittleImage", maxCount: 10 },
  { name: "silderFirstImage", maxCount: 10 },
  { name: "silderSecoundImage", maxCount: 10 },
  { name: "silderThirdImage", maxCount: 10 },
]);

// router.post("/", multipleFileUpload, async (req, res) => {
//   console.log(req.files);
//   console.log("File Uploaded");
//   console.log(req.files.tittleImage[0].path);
//   console.log(req.files.silderFirstImage[0].path);
//   console.log(req.files.silderSecoundImage[0].path);
//   console.log(req.files.silderThirdImage[0].path);
//   res.send("ok");
// });

router.get("/", async (req, res) => {
  const blogs = await Blog.find().sort("createdDate");
  res.send(
    _.map(
      blogs,
      _.partialRight(_.pick, [
        "_id",
        "tittle",
        "category",
        "heading",
        "detail",
        "tags",
        "tittleImage",
        "silderFirstImage",
        "silderSecoundImage",
        "silderThirdImage",
        "createdDate",
        "isActive",
      ])
    )
  );
});
router.get("/categories", async (req, res) => {
  const blogs = await Blog.find().sort("createdDate");
  var cateNames = [];
  blogs.filter(findCateNames);
  function findCateNames(item) {
    index = cateNames.indexOf(item.category);
    if (index < 0) return cateNames.push(item.category);
  }
  var cateWithCount = [];
  var counter = 0;
  cateNames.filter(findCateCount);

  function findCateCount(item) {
    counter = 0;
    blogs.map((val) => {
      if (val.category == item) {
        counter++;
      }
    });
    obj = {
      count: counter,
      name: item,
    };
    cateWithCount.push(obj);
  }

  res.send(cateWithCount);
});
router.get("/:id", auth, async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).send({ error: "No Post exist." });
  res.send(
    _.pick(blog, [
      "_id",
      "tittle",
      "category",
      "heading",
      "detail",
      "tags",
      "tittleImage",
      "silderFirstImage",
      "silderSecoundImage",
      "silderThirdImage",
      "createdDate",
      "isActive",
    ])
  );
});

router.post("/", multipleFileUpload, async (req, res) => {
  console.log(req.files);
  // const { error } = Validate(req.body);
  // if (error) return res.status("400").send(error.details[0].message);
  const blogs = await Blog.findOne({
    tittle: req.body.tittle,
  });

  if (blogs) return res.status("400").send({ error: "Post already uploaded." });
  let blog = new Blog(
    _.pick(req.body, [
      "tittle",
      "category",
      "heading",
      "detail",
      "tags",
      "tittleImage",
      "silderFirstImage",
      "silderSecoundImage",
      "silderThirdImage",
    ])
  );
  console.log("path", req.files.tittleImage);
  blog.tittleImage = req.files.tittleImage[0].location;
  blog.silderFirstImage = req.files.silderFirstImage[0].location;
  blog.silderSecoundImage = req.files.silderSecoundImage[0].location;
  blog.silderThirdImage = req.files.silderThirdImage[0].location;
  blog = await blog.save();
  res.send(
    _.pick(blog, [
      "_id",
      "tittle",
      "category",
      "heading",
      "detail",
      "tags",
      "tittleImage",
      "silderFirstImage",
      "silderSecoundImage",
      "silderThirdImage",
      "createdDate",
      "isActive",
    ])
  );
});
router.put("/", multipleFileUpload, async (req, res) => {
  console.log(req.files);
  const { error } = Validate(req.body);
  if (error) return res.status("400").send(error.details[0].message);
  const blogs = await Blog.findOne({
    tittle: req.body.tittle,
  });

  if (blogs) return res.status("400").send({ error: "Post already uploaded." });
  let blog = new Blog(
    _.pick(req.body, [
      "tittle",
      "category",
      "heading",
      "detail",
      "tags",
      "tittleImage",
      "silderFirstImage",
      "silderSecoundImage",
      "silderThirdImage",
    ])
  );
  blog.tittleImage = req.files.tittleImage[0].path;
  blog.silderFirstImage = req.files.silderFirstImage[0].path;
  blog.silderSecoundImage = req.files.silderSecoundImage[0].path;
  blog.silderThirdImage = req.files.silderThirdImage[0].path;
  blog = await blog.save();
  res.send(
    _.pick(blog, [
      "_id",
      "tittle",
      "category",
      "heading",
      "detail",
      "tags",
      "tittleImage",
      "silderFirstImage",
      "silderSecoundImage",
      "silderThirdImage",
      "createdDate",
      "isActive",
    ])
  );
});
router.put("/changestatus/:id", async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    _.pick(req.body, ["isActive"]),

    { new: true }
  );
  if (!blog) res.status(404).send({ error: "No post exist." });

  res.send(blog);
});
router.delete("/:id", async (req, res) => {
  const blog = await Blog.findByIdAndRemove(req.params.id);
  if (!blog) res.status(404).send({ error: "No user exist." });
  res.send(
    _.pick(blog, [
      "_id",
      "tittle",
      "category",
      "heading",
      "detail",
      "tags",
      "tittleImage",
      "silderFirstImage",
      "silderSecoundImage",
      "silderThirdImage",
      "createdDate",
      "isActive",
    ])
  );
});
module.exports = router;
