// const {courses} = require('./data/courses')
const {  validationResult } = require('express-validator');
const course = require('./course.model')


const getAllCourses = async(req,res)=>{
     get all courses from D
 const courses = await course.find()
    res.json(courses)
}

const getCourse = (req,res)=>{
    const courseId = +req.params.courseId
     
      let course = courses.find(course => course.id === courseId);

      if(!course){
        return res.status(404).json({message:"course not found"})
      }

    res.json(course)
}

const createCourse = (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
     return    res.status(400).json(errors.array())
    }
    console.log(req.body);

    courses.push({id:courses.length + 1,...req.body})

    res.status(201).json(courses)
}

const updateCourse = (req,res)=>{
    const courseId = +req.params.courseId;
    let course = courses.find(course => course.id === courseId)

    const errors = validationResult(req);

    if(!errors.isEmpty()){
     return    res.status(400).json(errors.array())
    }

    if(!course){
        return res.status(404).json({message:"course not found"})
      }



    course = {...course,...req.body}
     
    res.status(200).json(course)
    
}

const deleteCourse = (req,res)=>{
    const courseId = +req.params.courseId;

    let course = courses.filter(course => course.id !== courseId)



    if(!course){
        return res.status(404).json({message:"course not found"})
      }

     
    res.status(200).json({success:true,message:"course is deleted successfully"})
    
}

module.exports={
    getAllCourses,
    getCourse,
    createCourse,
    updateCourse,
    deleteCourse
}