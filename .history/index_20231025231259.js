const express = require('express')
const app = express()
const mongoose = require('mongoose');



app.use(express.json())

const coursesRouter = require('./routs')

app.use('/api/courses',coursesRouter)
// CRUD Create Read Update  Delete 


app.listen(4000,()=>{
   console.log("listening on port 4000")
})
