const asyncWrapper = require('../middlewares/asyncWrapper');
const User = require('../models/user.model')
const { validationResult } = require("express-validator");
const { SUCCESS,FAIL,ERROR } = require("../utils/httpStatusText");
const appErorr = require("../utils/appErorr");
const bcrypt = require('bcryptjs');

// get all users 
const getAllUsers =asyncWrapper( async(req,res)=>{

            const query =req.query;
            const limit = req.query.limit || 10;
            const page = req.query.page || 1;
            const skip = (page - 1) * limit

            const users = await User.find({},{"__v":false,"password":false}).limit(limit).skip(skip);

            console.log(users);

            res.json({ status: SUCCESS, data: { users: users } });
})

// register function 

const register =asyncWrapper( async(req,res,next)=>{

  const errors = validationResult(req);


    console.log(req.body);
   
    const {firstName,lastName,email,password} = req.body

     const oldUser = await User.findOne({email:email})
     
     if(oldUser){
       
        let error = appErorr.create("email is already has been exist",400,FAIL)
        return next(error);
     
     }

    //  password hashing 

    const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:hashedPassword
        });
  
        await newUser.save();
        res.status(201).json({status:SUCCESS,data:newUser});

    
  
})

const login =asyncWrapper(async(req,res,next)=>{

    const {email,password} = req.body;

    const user = await User.findOne({email:email});

    // check if user exist 
    if(!user){
            let error = appErorr.create("email inot found",400,FAIL)
            return next(error);
    }
    check 
}
) 




module.exports = {
    getAllUsers,
    register,
    login
}