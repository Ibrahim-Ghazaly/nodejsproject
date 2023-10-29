const express = require('express')
const app = express()
const { body } = require('express-validator');
const {courses} = require('./data/courses');

app.use(express.json())

// CRUD Create Read Update  Delete 


app.listen(4000,()=>{
   console.log("listening on port 4000")
})
