import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose'
import userRoutes from './src/users/routes/v1/user.route'
import productRoutes from './src/products/routes/v1/product.route'
import orderRoutes from './src/orders/routes/v1/order.route'
import priceRoutes from './src/prices/routes/v1/price.route'

import cors from 'cors'



const app = express()
app.use(morgan('dev'));

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost:27017/user-manage');
mongoose.connection.once('open',function(){
  console.log('DB connected');
}).on('error',function(error){
  console.log('error is:',error)
})

app.use('/uploads',express.static('uploads'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());


app.use('/price',priceRoutes)
app.use('/orders',orderRoutes)
app.use('/products',productRoutes)
app.use('/user', userRoutes)


app.use((req, res, next) => {
    const error =new Error("not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});





app.listen(port, () =>{
    console.log(`Server running on ${port}`)
})




