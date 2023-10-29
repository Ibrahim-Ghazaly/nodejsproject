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
    body("name").notEmpty().withMessage("name is required").isLength(2).withMessage("length must be greater than 2"),
    body("price").notEmpty().withMessage("price is required")

],(req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
     return    res.status(400).json(errors.array())
    }
    console.log(req.body);

    courses.push({id:courses.length + 1,...req.body})

    res.status(201).json(courses)
})


// update course 

app.patch('/api/courses/:courseId',body("name").notEmpty().withMessage("name is required"),(req,res)=>{
    const courseId = +req.params.courseId;
    let course = courses.find(course => course.id === courseId)

    const errors = validationResult(req);

    if(!errors.isEmpty()){
     return    res.status(400).json(errors.array())
    }

    if(!course){
        return res.status(404).json({message:"course not found"})
      }



    course = {...course,...req.body}
     
    res.status(200).json(course)
    
})


// delte course 

app.delete('/api/courses/:courseId',(req,res)=>{
    const courseId = +req.params.courseId;

    let course = courses.filter(course => course.id !== courseId)



    if(!course){
        return res.status(404).json({message:"course not found"})
      }

     
    res.status(200).json({success:true,message:"course is deleted success"})
    
})

app.listen(4000,()=>{
   console.log("listening on port 4000")
})
