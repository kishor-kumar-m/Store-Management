
import mongoose from 'mongoose'

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {type:mongoose.Schema.Types.ObjectId,ref:'Product' ,required : true},
    userId: {type:mongoose.Schema.Types.ObjectId,ref:'User' ,required : true},
    quantity:{type: Number,default: 1},
    orderedAt :{type:Date,default:Date.now}

});

module.exports = mongoose.model('Order',orderSchema);