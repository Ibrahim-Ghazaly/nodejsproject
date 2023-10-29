const express = require("express");
const router = express.Router();

// get all users 
// Register 
// Login 

router
  .route("/")
  .get(courseController.getAllCourses)
  .post( validatinMiddleware(),courseController.createCourse);

// router
//   .route("/:courseId")
//   .get(courseController.getCourse)
//   .patch(courseController.updateCourse)
//   .delete(courseController.deleteCourse);

module.exports = router;
