const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller")

// get all users 

router
  .route("/")
  .get(,veruserController.getAllUsers)


// Register 

  router
  .route("/register")
  .post(userController.register)

// Login 

  router
  .route("/login")
  .post(userController.login)




module.exports = router;
