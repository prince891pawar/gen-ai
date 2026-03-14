 const { Router } = require('express');
const authController = require('../controllers/auth.controllers')

 const authRouter = Router()

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

 module.exports = authRouter 