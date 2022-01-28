import Order from '../models/order.model'
import mongoose from 'mongoose'



exports.getOrder = async(req,res,next) =>{
    await Order.find()
    
    .then(docs =>  {
        res.status(200).json(docs);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
    }

exports.createOrder = async(req,res,next) =>{
    const order = await new Order({
        _id: mongoose.Types.ObjectId(),
        quantity: req.body.quantity,
        productId: req.body.productId,
        userId : req.body.userId
        
    });
    order
    .save()
    
    .then(result =>{
        console.log(result);
        res.status(201).json(result);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
}    

exports.deleteOrder = async(req,res,next) =>{
    const id = req.params.orderId
    await Order.remove({
        _id:id
    }).exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch(error => {
        res.status(500).json({
            error : error
        })
    })
} 


exports.updateOrder = async(req,res,next) =>{
    const id = req.params.orderId
    const updates = req.body
    const options = {new: true}
    Order.findByIdAndUpdate(id, updates, options)
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);  
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
}

exports.getOrderById = async (req,res,next) =>{
    const id= req.params.orderId;
    await Order.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc){
            res.status(200).json(doc);
        }else{
            res.status(404).json({message: 'No Matching Id '})
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

