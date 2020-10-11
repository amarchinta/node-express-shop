const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
dotenv.config();
const mongoose =  require("mongoose");
const productsRoutes = require("./api/routes/products");
const orderRoutes = require("./api/routes/orders");

mongoose.connect(process.env.MONGO_URI,()=>{
    console.log(`MONGO DB IS RUNNING ON ${process.env.MONGO_URI}`);
})

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use("/api/v1/products",productsRoutes);
app.use("/api/v1/orders", orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    res.status = 404 ;
    next(error);
})

app.use((error, req, res, next ) => {
    res.status(err.status || 500);
    res.json({
        error : {
            message : error.message
        }
    })
})

app.get('/',(req, res, next)=>{
    res.json({
        message : "you are done"
    })
})

app.listen(process.env.PORT, (req, res, next) => {
    console.log(`server is running on port - ${process.env.PORT}`);
})