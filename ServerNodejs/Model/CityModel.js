const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String , 
    tourists: String , 
    min:Number,
    max:Number,
    description:String,
    rate:Number,
    image:String
});

module.exports = mongoose.model('CityTable' , citySchema , 'CityTable');