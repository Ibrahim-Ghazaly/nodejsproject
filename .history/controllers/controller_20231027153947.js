const { validationResult } = require("express-validator");
const Course = require("../models/course.model");
const { SUCCESS,FAIL,ERROR } = require("../utils/httpStatusText");
const asyncWrapper = require("../middlewares/asyncWrapper")
const appErorr = require("../utils/appErorr");

// get all courses 

const getAllCourses = async (req, res) => {

  const query =req.query;
  const limit = req.query.limit || 10;
  const page = req.query.page || 1;
  const skip = (page - 1) * limit

  const courses = await Course.find({},{"__v":false}).limit(limit).skip(skip);

  console.log(courses);

  res.json({ status: SUCCESS, data: { courses: courses } });
};

// get single course 
const getCourse =asyncWrapper(
  async (req, res,next) => {


    let course = await Course.findById(req.params.courseId);
  
    if (!course) {
      let error = appErorr.create("course not found",404,FAIL)
       return next(error);
    }
  
    return res.json({ status: SUCCESS, data: { course: course } });

}
  
) 

// creat new course 
const createCourse =asyncWrapper( async (req, res,next) => {
  const errors = validationResult(req);

  console.log(errors);


  if (!errors.isEmpty()) {
    let error = appErorr.create(errors.array(),400,FAIL)
    return next(error);
    // return res.status(400).json({ status: FAIL,data:errors.array()});
  }
  console.log(req.body);

  const newCourse = new Course(req.body);

  await newCourse.save();
  res.status(201).json({status:SUCCESS,data:newCourse});
});

// update course 

const updateCourse =asyncWrapper( async (req, res) => {
  const courseId = req.params.courseId;

 
    let course = await Course.updateOne(
      { _id: courseId },
      { $set: { ...req.body } }
    );

    return res.status(200).json({status:SUCCESS,data:{course:course}});

});

// delete course 

const deleteCourse = asyncWrapper(async (req, res) => {
  const courseId = req.params.courseId;

  let deletedCourse = await Course.deleteOne({ _id: courseId });

  res.status(200).json({ status: SUCCESS, data: null });
}) ;

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
