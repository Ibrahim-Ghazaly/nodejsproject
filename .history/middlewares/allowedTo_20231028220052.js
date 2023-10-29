const appErorr = require("../utils/appErorr")

module.exports = (...roles)=>{
   
    console.log(roles)

    return (req,res,next)=>{
        if(!roles.includes(req.currentUser.role)){
            return next(appErorr.)
        }
        next()
    }
}