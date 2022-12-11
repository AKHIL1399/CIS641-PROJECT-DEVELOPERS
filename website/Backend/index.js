const config = require("config");
const express = require("express");
const mongoose = require("mongoose");
const users = require("./routes/users");
const auth = require("./routes/auth");
const orders = require("./routes/orders");
const works = require("./routes/works");
const items = require("./routes/items");
const cros = require("cors");
if (!config.get("jwtPrivateKey")) {
  console.log("Fetal error: Jwt key is not defined....");
  process.exit(1);
}

//mongoose.connect("mongodb://127.0.0.1:27017/TestDB")
mongoose
  .connect(config.get("connectionString"))
  .then(() => {
    console.log("connected from database.....");
  })
  .catch((error) => {
    console.log(`could not connected with database...${error}`);
  });

const app = express();
app.use(cros());
console.log(`Application envoirment is ${app.get("env")}`);
console.log(`Application envoirment is ${config.get("connectionString")}`);

app.use(express.json());
app.use("/api/users", users);

app.use("/api/auth", auth);
app.use("/api/orders", orders);
app.use("/api/works", works);
app.use("/api/items", items);
app.get("/", (req, res) => {
  res.send("Bismillah");
});
require("./startup/prod")(app);
// // const port=process.env.port || 3000;
//  app.listen(port,()=>{console.log(`Listening on port ${port}...`)})
app.listen(process.env.PORT || 3000, function () {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
