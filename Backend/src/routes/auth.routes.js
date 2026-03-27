 const { Router } = require('express');
const authController = require('../controllers/auth.controllers')
const authMiddleware = require('../middleware/auth.middleware')
 const authRouter = Router()

/* 
* 
**/


/**
 * routes post /api/auth/register 
 * description register a new user 
 * access public    
 */
 authRouter.post('/register', authController.registerUserController)

/*
* route post /api/auth/login
* description login user with email and password 
* access public
 **/
 authRouter.post('/login', authController.loginUserController)


/*
* routes post /api/auth/logout
* description logout user 
* access public
**/
authRouter.get('/logout', authController.logoutUserController)


/*
* post /api/auth/get-me
* description get the current logged in user detail
* access private
**/
authRouter.get("/get-me", authMiddleware.authUser,authController.getMeController )

 module.exports = authRouter 