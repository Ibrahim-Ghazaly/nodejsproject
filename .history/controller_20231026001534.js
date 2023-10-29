// const {courses} = require('./data/courses')
const {  validationResult } = require('express-validator');
const Course = require('./course.model')

const getAllCourses = async (req,res)=>{
    //  get all courses from Db using course model 
 const courses = await Course.find()

  console.log(courses)

    res.json(courses)
}

const getCourse = async(req,res)=>{
    const courseId = +req.params.courseId
     
      let course = Course.findById()

      if(!course){
        return res.status(404).json({message:"course not found"})
      }

    res.json(course)
}

const createCourse =async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
     return    res.status(400).json(errors.array())
    }
    console.log(req.body);
   
    const newCourse = new Course(req.body)
      
    await  newCourse.save()
    res.status(201).json(newCourse)
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