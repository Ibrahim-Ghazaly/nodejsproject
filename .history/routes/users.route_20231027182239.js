const express = require("express");
const router = express.Router();

// get all users 
// Register 
// Login 

router
  .route("/")
  .get(userController.getAll)
  .post( validatinMiddleware(),courseController.createCourse);

// router
//   .route("/:courseId")
//   .get(courseController.getCourse)
//   .patch(courseController.updateCourse)
//   .delete(courseController.deleteCourse);

module.exports = router;
