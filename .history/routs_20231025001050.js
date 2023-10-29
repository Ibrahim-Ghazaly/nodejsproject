const express = require('express')
const router = express.Router()

const courseController = require('./controller')
const validatinMiddleware = require('./')



router.route('/').get(courseController.getAllCourses)
                 .post(courseController.createCourse,)


router.route('/:courseId').get(courseController.getCourse)
                          .patch(courseController.updateCourse)
                          .delete(courseController.deleteCourse)






module.exports = router
