 const { Router } = require('express');
const authController = require('../controllers/auth.controllers')

 const authRouter = Router()

/**
 * routes post /api/auth/register 
 * description register a new user 
 * access public    
 */
 authRouter.post('/register', authController.registerUserController)

 module.exports = authRouter 