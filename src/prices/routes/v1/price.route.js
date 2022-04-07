import express from 'express'
import mongoose from 'mongoose'
import priceController from '../../controllers/priceController'
require('../../../config/passport')
import passport from 'passport';
const router =  express.Router();



router.get('/get-prices',passport.authenticate('jwt',{session:false}),priceController.getPrice);
router.post('/create-price',passport.authenticate('jwt',{session:false}),priceController.createPrice)
router.patch('/update-price/:priceId',passport.authenticate('jwt',{session:false}),priceController.updatePrice)
router.delete('/delete-price/:priceId',passport.authenticate('jwt',{session:false}),priceController.deletePrice)
router.get('/get-price/:priceId',passport.authenticate('jwt',{session:false}),priceController.getPriceById)




module.exports = router; 