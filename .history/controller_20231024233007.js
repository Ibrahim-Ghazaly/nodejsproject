


const getAllCourses = (req,res)=>{
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

const createPost