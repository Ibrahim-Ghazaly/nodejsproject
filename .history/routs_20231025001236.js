const express = require('express')
const router = express.Router()

const courseController = require('./controller')
const validatinMiddleware} = require('./middelware')



router.route('/').get(courseController.getAllCourses)
                 .post(courseController.createCourse,validatinMiddleware())


router.route('/:courseId').get(courseController.getCourse)
                          .patch(courseController.updateCourse)
                          .delete(courseController.deleteCourse)






module.exports = router
