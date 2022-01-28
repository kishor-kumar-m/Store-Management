import User from '../models/user.model'
import mongoose from 'mongoose'
import Order from '../../orders/models/order.model'
import bcrypt from 'bcrypt';

exports.signUp = (req,res,next)=>{
    bcrypt.hash(req.body.password,10,function(error,hash){
        if(error){
            console.log(error)
            return res.status(500).json({
                err:error
                
            });            
        }else{
            const user = new User({
                _id : mongoose.Types.ObjectId(),
                email : req.body.email,
                password :hash
        });
        user
        .save()
        .then(result=>{
            console.log(result);
            res.status(201).json({                
                message :'User Created',               
                createduser : result
            });
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error : err
            })
         
        
        });
    }
});
}



exports.login = async (req,res,next) => {
    await User.find({email : req.body.email})
    .exec()
    .then(user => {
        if(user.length <1){
            return res.status(401).json({
                message : 'Auth failed'

            });
            
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result) =>{
            
            if(result){
                return res.status(200).json({
                    message : "Auth Successful",
                    
                })
            }
            res.status(401).json({
                message :'Invalid Password '
            })

        });   
    })  
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })

    });


}


exports.getOrder = async(req,res,next) =>{
    
    
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