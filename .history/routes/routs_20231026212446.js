const express = require("express");
const router = express.Router();

const courseController = require("../controllers/controller");
const  {validatinMiddleware}  = require("../middlewares/middelware");
const { body } = require('express-validator');


router
  .route("/")
  .get(courseController.getAllCourses)
  .post(courseController.createCourse,  [
    body("name").notEmpty().withMessage("name is required").isLength(2).withMessage("length must be greater than 2"),
    body("price").notEmpty().withMessage("price is required")
]);

router
  .route("/:courseId")
  .get(courseController.getCourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deleteCourse);

module.exports = router;
