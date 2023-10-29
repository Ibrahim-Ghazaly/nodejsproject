const express = require('express')
const router = express.Router()

const { body } = require('express-validator');
const courseController = require('./controller')

// get all courses 

router.route('/').get(courseController.getAllCourses)

    

// get courses by id 

router.get('/:courseId',courseController.getCourse)


// post  courses 

router.post()


// update course 

router.patch('/:courseId',courseController.updateCourse,body("name").notEmpty().withMessage("name is required"),)


// delte course 

router.delete('/:courseId',courseController.deleteCourse)


module.exports = router
