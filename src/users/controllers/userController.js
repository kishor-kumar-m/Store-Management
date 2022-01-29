import User from '../models/user.model'
import mongoose from 'mongoose'

import bcrypt from 'bcrypt';


/**POST Method to create a new User */    

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

/**POST Method to login a existing user */    

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


