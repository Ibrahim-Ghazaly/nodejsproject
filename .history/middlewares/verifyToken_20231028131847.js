const jwt = require('jsonwebtoken');
const appErorr = require('../utils/appErorr');


const verifyToken = (req,res,next)=>{
  
    const authHeader = req.headers['Authorization'] ||req.headers['authorization'];

    if(!authHeader){
        return res.status(401).json({message:"token is required"})
    }
    const token = authHeader.split(' ')[1];

    try{
       jwt.verify(token,process.env.JWT_SECRET_KEY);
       next()

    }catch(err){
       const error = appErorr.create('invalid token',401,)
    }
    console.log(token)
}

module.exports =verifyToken