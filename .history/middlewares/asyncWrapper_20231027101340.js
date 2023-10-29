module.exports =(asyncFn)=>{
  
    return (req,res,next)=>{
        asyncFn(req)
    }
}