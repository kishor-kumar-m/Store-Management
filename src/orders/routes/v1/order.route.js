import express from 'express'
import orderController from '../../controllers/orderController'

const router =  express.Router();



router.get('/get-orders',orderController.getOrder);


router.post('/create-order',orderController.createOrder)

router.patch('/update-order/:orderId',orderController.updateOrder)

router.delete('/delete-order/:orderId',orderController.deleteOrder)

router.get('/get-order/:orderId',orderController.getOrderById)

router.get('/get-user-orders/:userId',orderController.getUserOrder);

module.exports = router; 