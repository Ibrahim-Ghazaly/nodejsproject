const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");

const courseController = require("../controllers/controller");
const  {validatinMiddleware}  = require("../middlewares/middelware");


router
  .route("/")
  .get(courseController.getAllCourses)
  .post(verifyToken, validatinMiddleware(),courseController.createCourse);

router
  .route("/:courseId")
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(verifyToken,courseController.deleteCourse);

module.exports = router;
