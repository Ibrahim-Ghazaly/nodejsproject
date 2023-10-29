

module.exports =async(payload)=>{

    const token = await jwt.sign({email:newUser.email,id:newUser._id},process.env.JWT_SECRET_KEY,{expiresIn:'1m'});
     
}