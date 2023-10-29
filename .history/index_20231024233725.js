const express = require('express')
const app = express()
const { body, validationResult } = require('express-validator');
const {courses} = require('./data/courses');
const courseController = require('./controller')

app.use(express.json())

// CRUD Create Read Update  Delete 


// get all courses 

app.get('/api/courses',courseController.getAllCourses)

// get courses by id 

app.get('/api/courses/:courseId',courseController.getCourse)


// post  courses 

app.post('/api/courses',courseController.createCourse,[
    body("name").notEmpty().withMessage("name is required").isLength(2).withMessage("length must be greater than 2"),
    body("price").notEmpty().withMessage("price is required")

],)


// update course 

app.patch('/api/courses/:courseId',courseController.updateCourse,body("name").notEmpty().withMessage("name is required"),)


// delte course 

app.delete('/api/courses/:courseId',)

app.listen(4000,()=>{
   console.log("listening on port 4000")
})
