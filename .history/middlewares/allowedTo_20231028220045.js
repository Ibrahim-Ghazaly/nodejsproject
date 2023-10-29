module.exports = (...roles)=>{
   
    console.log(roles)

    return (req,res,next)=>{
        if(!roles.includes(req.currentUser.role)){
            return next(app)
        }
        next()
    }
}