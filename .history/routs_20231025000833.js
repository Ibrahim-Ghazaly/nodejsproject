const express = require('express')
const router = express.Router()

const { body } = require('express-validator');
const courseController = require('./controller')




router.route('/').get(courseController.getAllCourses)
                 .post(courseController.createCourse,)


router.route('/:courseId').get(courseController.getCourse)
                          .patch(courseController.updateCourse,body("name").notEmpty().withMessage("name is required"))
                          .delete(courseController.deleteCourse)






module.exports = router
