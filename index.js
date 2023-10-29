const express = require("express");
const cors = require("cors")
require('dotenv').config()
const mongoose = require("mongoose");
const url = process.env.MONGO_URL;
const {Error} = require('./utils/httpStatusText')
const app = express();
const path =require('path')

app.use('/uploads',express.static(path.join(__dirname,'uploads')))

async function main() {
  await mongoose.connect(url).then(() => console.log("server started"));

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main();

app.use(express.json());
app.use(cors());

const coursesRouter = require("./routes/courses.route");
const usersRouter = require("./routes/users.route");


// global middleware for routes 
app.use("/api/courses", coursesRouter);
app.use("/api/users", usersRouter);


// global middleware for for not found router

app.all('*',(req,res,next)=>{
  return res.status(404).json({status:Error,message:"this resource is not available"})
})

// global error handler 
app.use((error,req,res,next)=>{
  
   res.status(error.statusCode || 500).json({status:error.statusText || Error,message:error.message,code:error.statusCode || 500,data:null});
})

app.listen(process.env.PORT || 4000, () => {
  console.log("listening on port 4000");
});
