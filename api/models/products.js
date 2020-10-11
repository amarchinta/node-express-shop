const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        Required : true
    },
    price:{
        type : String,
        Required : true
    }
})

module.exports = mongoose.model('Products', productSchema);