const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Product = require("../models/products");

router.post("/",(req, res, next) => {
     const product = new Product({
        _id : new mongoose.Types.ObjectId(),
        name : req.body.name,
        price : req.body.price
    })

    product.save()
    .then(result => {
        console.log('product added')
    })
    .catch(err => {
        console.log(err);
    })

    res.status(200).json({
        message : "Producst are working"
    })
})

router.get("/:productId",(req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message : id,
        msg: "single product "
    })
})

router.patch("/:productId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : id,
        msg: "Updating an product"
    })
})

router.delete("/:productId" , (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : id,
        msg: "Deleting product"
    })
})


module.exports = router