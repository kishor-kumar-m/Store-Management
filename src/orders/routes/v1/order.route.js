import express from 'express'
import orderController from '../../controllers/orderController'
require('../../../config/passport')
import passport from 'passport';
const router =  express.Router();



router.get('/get-orders',passport.authenticate('jwt',{session:false}),orderController.getOrder);


router.post('/create-order',passport.authenticate('jwt',{session:false}),orderController.createOrder)

router.patch('/update-order/:orderId',passport.authenticate('jwt',{session:false}),orderController.updateOrder)

router.delete('/delete-order/:orderId',passport.authenticate('jwt',{session:false}),orderController.deleteOrder)

router.get('/get-order/:orderId',passport.authenticate('jwt',{session:false}),orderController.getOrderById)

router.get('/get-user-orders/:userId',passport.authenticate('jwt',{session:false}),orderController.getUserOrder);

module.exports = router; 