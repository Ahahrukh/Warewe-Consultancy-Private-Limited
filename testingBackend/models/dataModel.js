const mongoose = require('mongoose');

const dataSchema=new mongoose.Schema({
    name:String,
    price:Number,
    brand:String,
    place:String
})

const dataModel = mongoose.model("alldata", dataSchema);

module.exports = dataModel