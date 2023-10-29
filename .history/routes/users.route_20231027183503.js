const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

// get all users 

router
  .route("/")
  .get(userController.getAllUsers)


// Register 

  router
  .route("/register")
  .post(userController.register)

// Login 

  router
  .route("/login")
  .post(userController.login)


// router
//   .route("/:courseId")
//   .get(courseController.getCourse)
//   .patch(courseController.updateCourse)
//   .delete(courseController.deleteCourse);

module.exports = router;
