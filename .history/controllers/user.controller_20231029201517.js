const asyncWrapper = require('../middlewares/asyncWrapper');
const User = require('../models/user.model')
const { validationResult } = require("express-validator");
const { SUCCESS,FAIL,ERROR } = require("../utils/httpStatusText");
const appErorr = require("../utils/appErorr");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const generateJWT = require('../utils/generateJWT');
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
    console.log(req.file);

   
    const {firstName,lastName,email,password,role} = req.body

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
            password:hashedPassword,
            role,
            avatar:req.file.filename
        });

        // generate jwt token 
       const token =await generateJWT({email:newUser.email,id:newUser._id,role:newUser.role});


    //  console.log(token)

        newUser.token = token
        await newUser.save();
        res.status(201).json({status:SUCCESS,data:newUser});

    
  
})

// login function 

const login =asyncWrapper(async(req,res,next)=>{

    const {email,password} = req.body;

    console.log(email.length)
    console.log(password.length)


    if((email.length == 0) || (password.length == 0)){
        let error = appErorr.create("email and password are required",400,FAIL)
        return next(error); 
    }

    const user = await User.findOne({email:email});

    // check if user exist 
    if(!user){
            let error = appErorr.create("email  not found",400,FAIL)
            return next(error); 
    }

    const matchPassword = await bcrypt.compare(password,user.password);

    console.log(matchPassword)
 
        if(user && matchPassword){
           
                    // generate jwt token 
       const token =await generateJWT({email:user.email,id:user._id});

            return res.json({status:SUCCESS,data:{token}})
            
        }else{
                let error = appErorr.create("something went wrong",500,FAIL)
                return next(error);
        }
}
) 

module.exports = {
    getAllUsers,
    register,
    login
}