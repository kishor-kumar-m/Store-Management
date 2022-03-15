import express from 'express'

require('../../../config/passport')

import userController from '../../controllers/userController'

import passport from 'passport';
// import bcrypt from 'bcrypt';

const router =  express.Router();


router.post('/signup',userController.signUp);


router.post('/login',userController.login);

router.get('/protected',passport.authenticate('jwt',{session:false}),(req,res)=>{
    res.status(200).send({
        success : true,
        user :{
            id : req.user._id,
            email : req.user.email
        }
    })
})







module.exports = router;