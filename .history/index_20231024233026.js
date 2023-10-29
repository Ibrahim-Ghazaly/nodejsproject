const express = require('express')
const app = express()
const { body, validationResult } = require('express-validator');
const {courses} = require('./data/courses')

app.use(express.json())

// CRUD Create Read Update  Delete 


// get all courses 

app.get('/api/courses',)

// get courses by id 

app.get('/api/courses/:courseId',)


// post  courses 

app.post('/api/courses',)


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

     
    res.status(200).json({success:true,message:"course is deleted successfully"})
    
})

app.listen(4000,()=>{
   console.log("listening on port 4000")
})