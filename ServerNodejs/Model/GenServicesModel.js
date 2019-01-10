const mongoose = require('mongoose');

const genServicesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    rate:Number,
    status:String,
    city:String,
    price:Number,
    image:String
});

module.exports = mongoose.model('GenLookServicesTable' , genServicesSchema , 'GenLookServicesTable');
