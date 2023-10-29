const express = require("express");
const router = express.Router();
const userController = re

// get all users 
// Register 
// Login 

router
  .route("/")
  .get(userController.getAllUsers)

// router
//   .route("/:courseId")
//   .get(courseController.getCourse)
//   .patch(courseController.updateCourse)
//   .delete(courseController.deleteCourse);

module.exports = router;
