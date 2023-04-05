const express = require('express')
const { registerController, loginController, logoutController } = require("../client/src/controller/authcontroller")

//router object
const router = express.Router();

//routes
//REGISTER
router.post("/register",registerController);

//LOGIN
router.post("/login",loginController);

//LOGOUT
router.post("/logout",logoutController);

module.exports = router