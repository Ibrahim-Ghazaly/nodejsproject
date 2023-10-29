const express = require("express");
const router = express.Router();

const courseController = require("../controllers/controller");
const  {validatinMiddleware}  = require("../middlewares/middelware");

const k = con

router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse, validatinMiddleware());

router
  .route("/:courseId")
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
