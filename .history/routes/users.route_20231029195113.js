const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const multer  = require('multer')


const diskStorage =multer.diskStorage({
  destination:function(req,file,cb){
    console.log("file",file);
    cb(null,'uploads')
  },
  filename:function(req,file,cb){
    const fileName =`user-${Date}`
  }
})
const upload = multer({ storage:diskStorage})
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
