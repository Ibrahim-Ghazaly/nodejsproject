const express = require('express')



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

app.delete('/api/courses/:courseId',courseController.deleteCourse)
