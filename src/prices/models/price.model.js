import mongoose from 'mongoose'

const priceSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productId: {type:mongoose.Schema.Types.ObjectId,ref:'Product' ,required : true},
    lastPrice:{type: Number, required : true}
});

module.exports = mongoose.model('Price',priceSchema);