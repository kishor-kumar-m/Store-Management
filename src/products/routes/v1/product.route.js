import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
const router =  express.Router();

import productController from '../../controllers/productController'

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename: function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g,'-') + file.originalname)
    }
});

const upload = multer({storage:storage});  



router.get('/get-products',productController.products_get);

router.post('/create-product',upload.single('productImage'),productController.product_post);

router.get('/get-product/:productId',productController.products_get_id);

router.delete('/delete/:productId',productController.product_delete);

router.patch('/update/:productId',productController.product_update);

module.exports = router; 