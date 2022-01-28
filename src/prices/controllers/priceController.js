import Price from '../models/price.model'
import mongoose from 'mongoose'


exports.getPrice = async(req,res,next) =>{
    await Price.find()
    
    .then(docs =>  {
        res.status(200).json(docs);
    })
    .catch(err =>{
        res.status(500).json({
            error: err
        })
    })
    }

exports.createPrice = async(req,res,next) =>{
    const price = await new Price({
        _id: mongoose.Types.ObjectId(),
        productId: req.body.productId,
        lastPrice : req.body.lastPrice
        
    });
    price
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

exports.updatePrice = async(req,res,next) =>{
    const id = req.params.priceId
    const updates = req.body
    const options = {new: true}
    Price.findByIdAndUpdate(id, updates, options)
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

exports.deletePrice = async(req,res,next) =>{
    const id = req.params.priceId
    await Price.remove({
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

exports.getPriceById = async (req,res,next) =>{
    const id= req.params.priceId;
    await Price.findById(id)
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
