import Order from '../models/order.model'
import mongoose from 'mongoose'


/** GET Method to get all the orders*/
exports.getOrder = async(req,res,next) =>{
    await Order.find()
    
    .then(docs =>  {
        const response ={
            count: docs.length,
            data: docs

        };
        res.status(200).json({
            result : response
        });
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
    }

/**POST Method to create a new Order */    
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
        res.status(201).json({
            message : "Order created",
            data : result
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    })
}    
/**DELETE Method to delete the specific order by orderId */
exports.deleteOrder = async(req,res,next) =>{
    const id = req.params.orderId
    await Order.deleteOne({
        _id:id
    }).exec()
    .then(result => {
        res.status(200).json({
            message : "Order deleted",
            data :result
        });
    })
    .catch(error => {
        res.status(500).json({
            error : error
        })
    })
} 

/**PATCH Method to update the specific order by orderId */

exports.updateOrder = async(req,res,next) =>{
    const id = req.params.orderId
    const updates = req.body
    const options = {new: true}
    Order.findByIdAndUpdate(id, updates, options)
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            data : result
        });  
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
}

/** GET Method to get the specific order by orderId*/
exports.getOrderById = async (req,res,next) =>{
    const id= req.params.orderId;
    await Order.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc){
            res.status(200).json({
                data : doc
            });
        }else{
            res.status(404).json({message: 'No Matching Id '})
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err});
    });
}

/**GET Method to get the Users order in a date range */
exports.getUserOrder = async(req,res,next) =>{
    
    
    await Order.find({userId:req.params.userId,
            orderedAt: {
                    $gte:  new Date(req.body.fromdate) ,
                    $lt: new Date(req.body.todate)
                }  
            })              
    .populate('userId')
    
    .then(docs =>  {
        if (docs.length !=0){
        res.status(200).json({

            count: docs.length,
            
            orders: docs.map(doc => {
                return {
                  _id: doc._id,
                  productId: doc.productId,
                  userId : doc.userId._id,
                  userEmail : doc.userId.email,
                  quantity : doc.quantity,
                  orderedAt : doc.orderedAt
                }
            })
        });}
        else{

            res.status(200).json({message: 'No Matching Data found on the given date '})
        }
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
    }