
const verifyToken = (req,res,next)=>{
  
    const authHeader = req.headers['Authorization'] ||req.headers['authorization'];
    const token = authHeader.split(' ')[1]
}