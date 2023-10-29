
const verifyToken = (req,res,next)=>{
  
    const authHeader = req.headers['Authorization'] ||req.headers['authorization'];

    if(!authHeader){
        return 
    }
    const token = authHeader.split(' ')[1];
    console.log(token)
    next()
}

module.exports =verifyToken