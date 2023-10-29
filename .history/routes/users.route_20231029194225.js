const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const multer  = require('multer')


const diskStorage =
const upload = multer({ storage:diskStorage  })
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
