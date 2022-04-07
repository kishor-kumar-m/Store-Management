import Product from '../models/product.model'
import mongoose from 'mongoose'

/** GET Method to get all the products*/
 
exports.products_get= async(req,res,next) =>{
    await Product.find()
    .select('name description productImage')
    .exec()
    .then(docs => {
        const response ={
            count: docs.length,
            data: docs

        };
    res.status(200).json({
        result:response
    });   
    })
    
    .catch(err =>{
        console.log(err);
        res.status(500).json({error:err});

    })
    
};

/**POST Method to create a new Product */    

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
            message:'Product Created',
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

/** GET Method to get the specific product by productId*/

exports.products_get_id = async (req,res,next) =>{
    const id= req.params.productId;
    await Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc){
            res.status(200).json({
                data:doc 
            });
        }else{
            res.status(404).json({message: 'No Matching Id '})
        }
        
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error:err.message});
    });
}

/**DELETE Method to delete the specific product by productId */

exports.product_delete = async(req,res,next) =>{
    const id = req.params.productId;
    await Product.deleteOne({
        _id : id
    }).exec()
    .then(result => {
        res.status(200).json({
            data:result, 
            message : "Product deleted"
        });
    })
    .catch(error => {
        res.status(500).json({
            error : error.message
        })
    })

}

/**PATCH Method to update the specific product by productId */

exports.product_update = async(req,res,next) =>{
    const id = req.params.productId
    const updates = req.body
    const options = {new: true}
    Product.findByIdAndUpdate(id, updates, options)
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json({
            data:result
        });  
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
}