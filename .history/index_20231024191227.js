const express = require('express')

const app = express()

// CRUD Create Read Update  Delete 

const courses = [
    {
        id:1
    }
]

app.listen(4000,()=>{
   console.log("listening on port 4000")
})