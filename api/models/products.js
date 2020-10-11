const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name : {
        type : String,
        Required : [ true , 'Name can not be none']
    },
    price:{
        type : String,
        Required : [true, 'Price can not be none' ]
    }
})

module.exports = mongoose.model('Products', productSchema);