import express from 'express'
import mongoose from 'mongoose'
import priceController from '../../controllers/priceController'

const router =  express.Router();



router.get('/get-prices',priceController.getPrice);
router.post('/create-price',priceController.createPrice)
router.patch('/update-price/:priceId',priceController.updatePrice)
router.delete('/delete-price/:priceId',priceController.deletePrice)
router.get('/get-price/:priceId',priceController.getPriceById)




module.exports = router; 