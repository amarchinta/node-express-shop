const express = require("express");
const router = express.Router();

router.get("/",(req, res, next) => {
    res.status(200).json({
        message : "Orders are working"
    })
})

router.get("/:orderId",(req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : id,
        msg: "single order"
    })
})

router.patch("/:orderId", (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : id,
        msg: "Updating an order"
    })
})

router.delete("/:orderId" , (req, res, next) => {
    const id = req.params.orderId;
    res.status(200).json({
        message : id,
        msg: "Deleting order"
    })
})


module.exports = router