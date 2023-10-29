const jwt = require('jsonwebtoken');


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
       con
    }
    console.log(token)
}

module.exports =verifyToken