const express = require("express");
require('dotenv').config()

const app = express();
const mongoose = require("mongoose");

const url = process.env.MON

async function main() {
  await mongoose.connect(url).then(() => console.log("server started"));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();

app.use(express.json());

const coursesRouter = require("./routes/routs");

app.use("/api/courses", coursesRouter);
// CRUD Create Read Update  Delete

app.listen(4000, () => {
  console.log("listening on port 4000");
});
