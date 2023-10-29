const express = require('express')
const app = express()
const mongoose = require('mongoose');

const url = "mongodb+srv://ibrahimghazaly88:nodejscodezone@cluster0.fpjkmou.mongodb.net/?retryWrites=true&w=majority"

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use(express.json())

const coursesRouter = require('./routs')

app.use('/api/courses',coursesRouter)
// CRUD Create Read Update  Delete 


app.listen(4000,()=>{
   console.log("listening on port 4000")
})
