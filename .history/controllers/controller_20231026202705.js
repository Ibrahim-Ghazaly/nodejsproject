// const {courses} = require('./data/courses')
const { validationResult } = require("express-validator");
const Course = require("../models/course.model");

const { SUCCESS,FAIL,ERROR } = require("../utils/httpStatusText");

// get all courses 

const getAllCourses = async (req, res) => {

  const courses = await Course.find();

  console.log(courses);

  res.json({ status: SUCCESS, data: { courses: courses } });
};

// get single course 
const getCourse = async (req, res) => {
  try {
    let course = await Course.findById(req.params.courseId);

    if (!course) {
      return res.status(404).json({ status: FAIL,data:{cou}});
    }

    return res.json({ status: SUCCESS, data: { course: course } });
  } catch (err) {
    return res.status(404).json({ message: "Invalid Object Id" });
  }
};


// creat new course 
const createCourse = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }
  console.log(req.body);

  const newCourse = new Course(req.body);

  await newCourse.save();
  res.status(201).json(newCourse);
};

// update course 

const updateCourse = async (req, res) => {
  const courseId = req.params.courseId;

  try {
    let course = await Course.updateOne(
      { _id: courseId },
      { $set: { ...req.body } }
    );

    return res.status(200).json(course);
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

// delete course 

const deleteCourse = async (req, res) => {
  const courseId = req.params.courseId;

  let deletedCourse = await Course.deleteOne({ _id: courseId });

  res.status(200).json({ status: SUCCESS, data: null });
};

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
};
