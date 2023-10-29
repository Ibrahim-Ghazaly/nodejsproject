const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
// get all users 

router
  .route("/")
  .get(verifyToken,userController.getAllUsers)


// Register 

  router
  .route("/register")
  .post(userController.register)

// Login 

  router
  .route("/login")
  .post(userController.login)




module.exports = router;
