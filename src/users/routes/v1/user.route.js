import express from 'express'

import userController from '../../controllers/userController'
// import bcrypt from 'bcrypt';

const router =  express.Router();


router.post('/signup',userController.signUp);


router.post('/login',userController.login);








module.exports = router;