module.exports = (...roles)=>{
   
    console.log(roles)

    return (req,res,next)=>{
        next()
    }
}