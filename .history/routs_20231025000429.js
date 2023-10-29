const express = require('express')
const router = express.Router()

const { body } = require('express-validator');
const courseController = require('./controller')

// get all courses 

router.route('/').get(courseController.getAllCourses)
                    .post(courseController.createCourse,[
                        body("name").notEmpty().withMessage("name is required").isLength(2).withMessage("length must be greater than 2"),
                        body("price").notEmpty().withMessage("price is required")

                    ],)

// get courses by id 

router.route('/:courseId').get(courseController.getCourse)
.patch(courseController.updateCourse,body("name").notEmpty().withMessage("name is required"))
.delete(courseController.deleteCourse)






module.exports = router
