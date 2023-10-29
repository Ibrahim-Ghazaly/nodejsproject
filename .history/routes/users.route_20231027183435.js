const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

// get all users 
// Login 

router
  .route("/")
  .get(userController.getAllUsers)


  router
  .route("/register")
  .post(userController.register)


  router
  .route("/login")
  .post(userController.login)


// router
//   .route("/:courseId")
//   .get(courseController.getCourse)
//   .patch(courseController.updateCourse)
//   .delete(courseController.deleteCourse);

module.exports = router;
