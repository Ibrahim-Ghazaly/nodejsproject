const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

// get all users 
// Register 
// Login 

router
  .route("/")
  .get(userController.getAllUsers)


  router
  .route("/")
  .get(userController.getAllUsers)

// router
//   .route("/:courseId")
//   .get(courseController.getCourse)
//   .patch(courseController.updateCourse)
//   .delete(courseController.deleteCourse);

module.exports = router;
