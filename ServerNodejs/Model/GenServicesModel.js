const mongoose = require('mongoose');

const genServicesSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:String,
    price:[],
    rateStart:Number,
    status:String,
    image:String,
    booking:String,
    sale:Number
});

module.exports = mongoose.model('GenLookServicesTable' , genServicesSchema , 'GenLookServicesTable');
