const express = require('express')

const app = express()

// CRUD Create Read Update  Delete 

const courses = [
    {
        id:1,
        name:"Javascript course",
        price:1000
    },
    {
        id:2,
        name:"React course",
        price:2000
    },
    {
        id:3,
        name:"Angular course",
        price:3000
    },
    {
        id:4,
        name:"Node js course",
        price:4000
    },
]

// get all courses 

app.get('/api/courses',(req,res)=>{
    res.json(courses)
})

// get courses by id 

app.get('/api/courses/courseId',(req,res)=>{
    const courseId = req.params.courseId
     
      let course = co

    res.json(courses)
})



app.listen(4000,()=>{
   console.log("listening on port 4000")
})
