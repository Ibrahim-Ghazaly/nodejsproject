const asyncWrapper = require('../middlewares/asyncWrapper');
const User = require('../models/user.model')
const { validationResult } = require("express-validator");
const { SUCCESS,FAIL,ERROR } = require("../utils/httpStatusText");
const appErorr = require("../utils/appErorr");


const getAllUsers =asyncWrapper( async(req,res)=>{

            const query =req.query;
            const limit = req.query.limit || 10;
            const page = req.query.page || 1;
            const skip = (page - 1) * limit

            const users = await User.find({},{"__v":false}).limit(limit).skip(skip);

            console.log(users);

            res.json({ status: SUCCESS, data: { users: users } });
})

const register =asyncWrapper( async(req,res,next)=>{

    console.log(req.body);
   
    const {firstName,lastName,email,password} = req.body

     const isEmail = await User.find()).filter(user => user.email === email)
     
     if(isEmail){
        res.json({message:""})
     }
    // const errors = validationResult(req);

    // console.log(errors);
  
  
    // if (!errors.isEmpty()) {
    //   let error = appErorr.create(errors.array(),400,FAIL)
    //   return next(error);
      // return res.status(400).json({ status: FAIL,data:errors.array()});
    // }
    console.log(req.body);
  
    const newUser = new User(req.body);
  
    await newUser.save();
    res.status(201).json({status:SUCCESS,data:newUser});
})

const login = ()=>{

}


module.exports = {
    getAllUsers,
    register,
    login
}