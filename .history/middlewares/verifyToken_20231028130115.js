
const verifyToken = (req,res,next)=>{
  
    const authHeader = req.headers['Authorization'] ||req.headers['Authorization'];
    const token = authHeader.split(' ')[1]
}