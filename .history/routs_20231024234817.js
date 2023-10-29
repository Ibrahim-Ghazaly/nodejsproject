const express = require('express')
const router = express.Router()
const { body } = require('express-validator');
const courseController = require('./controller')

// get all courses 

router.get('/api/courses',courseController.getAllCourses)

// get courses by id 

router.get('/api/courses/:courseId',courseController.getCourse)


// post  courses 

router.post('/api/courses',courseController.createCourse,[
    body("name").notEmpty().withMessage("name is required").isLength(2).withMessage("length must be greater than 2"),
    body("price").notEmpty().withMessage("price is required")

],)


// update course 

router.patch('/api/courses/:courseId',courseController.updateCourse,body("name").notEmpty().withMessage("name is required"),)


// delte course 

router.delete('/api/courses/:courseId',courseController.deleteCourse)


module.e
