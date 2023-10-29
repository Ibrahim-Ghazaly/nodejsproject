const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const courseController = require("../controllers/controller");
const  {validatinMiddleware}  = require("../middlewares/middelware");
const userRoles= require('../utils/userRoles')
const allowedTo = require('../middlewares/allowedTo')

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(verifyToken, validatinMiddleware(),courseController.createCourse);

router
  .route("/:courseId")
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(verifyToken,allowedTo(userRoles.ADMIN,userRoles.MANAGER),courseController.deleteCourse);

module.exports = router;
