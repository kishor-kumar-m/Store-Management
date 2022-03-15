import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'
const router =  express.Router();
require('../../../config/passport')
import passport from 'passport';

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



router.get('/get-products',passport.authenticate('jwt',{session:false}),productController.products_get);

router.post('/create-product',upload.single('productImage'),productController.product_post);

router.get('/get-product/:productId',passport.authenticate('jwt',{session:false}),productController.products_get_id);

router.delete('/delete-product/:productId',productController.product_delete);

router.patch('/update-product/:productId',productController.product_update);

module.exports = router; 