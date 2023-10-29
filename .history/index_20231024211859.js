const express = require('express')
const app = express()
const { body, validationResult } = require('express-validator');


app.use(express.json())

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

app.get('/api/courses/:courseId',(req,res)=>{
    const courseId = +req.params.courseId
     
      let course = courses.find(course => course.id === courseId);

      if(!course){
        return res.status(404).json({message:"course not found"})
      }

    res.json(course)
})


// post  courses 

app.post('/api/courses',[
    body.
],(req,res)=>{

    console.log(req.body);

    courses.push({id:courses.length + 1,...req.body})

    res.status(201).json(courses)
})


app.listen(4000,()=>{
   console.log("listening on port 4000")
})
