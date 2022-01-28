import Product from '../models/product.model'
import mongoose from 'mongoose'

 
exports.products_get= async(req,res,next) =>{
    await Product.find()
    .select('name description productImage')
    .exec()
    .then(docs => {
        const response ={
            count: docs.length,
            products: docs

        };
    res.status(200).json(response);   
    })
    
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});

    })
    
};


exports.product_post =async (req,res,next) =>{
    console.log(req.file);
    
    const product = await new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        description: req.body.description,
        productImage : req.file.path
    });
    product.save()
    .then(result =>{
        console.log(result);
        res.status(201).json({
            message:'Handling POST Method',
            createdProduct: result
        });        
    })   
    .catch(err =>{
        console.log(err)
        res.status(500).json({
        error: err
    });  
})
      
}

exports.products_get_id = async (req,res,next) =>{
    const id= req.params.productId;
    await Product.findById(id)
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

exports.product_delete = async(req,res,next) =>{
    const id = req.params.productId;
    await Product.remove({
        _id : id
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

exports.product_update = async(req,res,next) =>{
    const id = req.params.productId
    const updates = req.body
    const options = {new: true}
    Product.findByIdAndUpdate(id, updates, options)
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