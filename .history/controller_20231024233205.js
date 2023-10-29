


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

const createCourse = (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
     return    res.status(400).json(errors.array())
    }
    console.log(req.body);

    courses.push({id:courses.length + 1,...req.body})

    res.status(201).json(courses)
}

const update 