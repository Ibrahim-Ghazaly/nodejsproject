const jwt = require('jsonwebtoken');


const verifyToken = (req,res,next)=>{
  
    const authHeader = req.headers['Authorization'] ||req.headers['authorization'];

    if(!authHeader){
        return res.status(401).json({message:"token is required"})
    }
    const token = authHeader.split(' ')[1];

    try{
       jwt
    }catch(err){

    }
    console.log(token)
    next()
}

module.exports =verifyToken