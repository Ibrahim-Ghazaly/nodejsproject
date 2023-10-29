const jwt = require('jsonwebtoken');
const appErorr = require('../utils/appErorr');
const { ERROR } = require('../utils/httpStatusText');


const verifyToken = (req,res,next)=>{
  
    const authHeader = req.headers['Authorization'] ||req.headers['authorization'];

    if(!authHeader){
        const error = appErorr.create(' token is required',401,ERROR)
       return next(error)
    }
    const token = authHeader.split(' ')[1];

    try{
      const cuu jwt.verify(token,process.env.JWT_SECRET_KEY);
       next()

    }catch(err){
       const error = appErorr.create('invalid token',401,ERROR)
       return next(error)
    }
    console.log(token)
}

module.exports =verifyToken