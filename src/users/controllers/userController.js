import User from '../models/user.model'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
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

            if(err.name == 'MongoServerError'){
                return res.status(400).json({
                    error : err.message
                })

            }
            res.status(500).json({
                error : err.message
            })
         
        
        });
    }
});
}

/**POST Method to login a existing user */    

exports.login = async (req,res,next) => {
    await User.findOne({email : req.body.email})
    .exec()
    .then(user => {      
        if(user){
        bcrypt.compare(req.body.password,user.password,(err,result) =>{            
            if(result){
                const payload ={
                    username : user.email,
                    id:user._id
                }               
                const token = jwt.sign(payload,"secret",{expiresIn:"1d"})
                return res.status(200).json({
                    message : "Auth Successful",
                    token : "Bearer " + token
                })
        }
            res.status(401).json({
                message :'Invalid Password '
            })

        });   
    }
    else{
        res.status(404).json({
            message :'No user found'
        })
    }
}) 
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        })

    });
}


