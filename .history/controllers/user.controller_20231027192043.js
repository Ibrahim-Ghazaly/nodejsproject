const Us = require("../models/course.model");


const getAllUsers = async(req,res)=>{

            const query =req.query;
            const limit = req.query.limit || 10;
            const page = req.query.page || 1;
            const skip = (page - 1) * limit

            const courses = await Course.find({},{"__v":false}).limit(limit).skip(skip);

            console.log(courses);

            res.json({ status: SUCCESS, data: { courses: courses } });
}

const register = ()=>{

}

const login = ()=>{

}


module.exports = {
    getAllUsers,
    register,
    login
}