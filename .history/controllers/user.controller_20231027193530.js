const asyncWrapper = require('../middlewares/asyncWrapper');
const User = require('../models/user.model')
const {S}


const getAllUsers =asyncWrapper( async(req,res)=>{

            const query =req.query;
            const limit = req.query.limit || 10;
            const page = req.query.page || 1;
            const skip = (page - 1) * limit

            const users = await User.find({},{"__v":false}).limit(limit).skip(skip);

            console.log(users);

            res.json({ status: SUCCESS, data: { users: users } });
})

const register = ()=>{

}

const login = ()=>{

}


module.exports = {
    getAllUsers,
    register,
    login
}