const asyncWrapper = require('../middlewares/asyncWrapper');
const User = require('../models/user.model')
const {SUCCESS} = require('../utils/httpStatusText')


const getAllUsers =asyncWrapper( async(req,res)=>{

            const query =req.query;
            const limit = req.query.limit || 10;
            const page = req.query.page || 1;
            const skip = (page - 1) * limit

            const users = await User.find({},{"__v":false}).limit(limit).skip(skip);

            console.log(users);

            res.json({ status: SUCCESS, data: { users: users } });
})

const register = ()=>{
   
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
}

const login = ()=>{

}


module.exports = {
    getAllUsers,
    register,
    login
}