const express = require('express')
const app = express()

app.use(express.json())

const coursesRouter = require('./routs')

app.use('/',courseesRouter)
// CRUD Create Read Update  Delete 


app.listen(4000,()=>{
   console.log("listening on port 4000")
})
