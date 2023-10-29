const jwt = require('jsonwebtoken');


module.exports =async(payload)=>{

    const token = await jwt.sign(p,process.env.JWT_SECRET_KEY,{expiresIn:'1m'});
     
}