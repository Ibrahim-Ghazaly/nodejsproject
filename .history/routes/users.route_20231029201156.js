const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const multer  = require('multer');
const appErorr = require("../utils/appErorr");


const diskStorage =multer.diskStorage({
  destination:function(req,file,cb){
    console.log("file",file);
    cb(null,'uploads')
  },
  filename:function(req,file,cb){
    const ext = file.mimetype.split('/')[1];
    const fileName =`user-${Date.now()}.${ext}`
    cb(null,fileName)
  }
})

const fileFilter = (req,file,cb)=>{
  const imageType =file.mimetype.split('/')[0]

  if(imageType === 'image'){
    cb(null,true)
  }else{
    cb(appErorr.create('file must be an image',400),false)

  }
}
const upload = multer({ storage:diskStorage,fileFilter})
// get all users 

router
  .route("/")
  .get(verifyToken,userController.getAllUsers)


// Register 

  router
  .route("/register")
  .post(upload.single('avatar'),userController.register)

// Login 

  router
  .route("/login")
  .post(userController.login)




module.exports = router;
