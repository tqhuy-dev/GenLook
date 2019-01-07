const mongoose = require('mongoose');

const activitiesSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    rateStart:Number,
    mainPrice:Number,
    salePrice:Number,
    status:String,
    dayOpen:String,
    dayClose:String,
    city:String,
    image:String
});

module.exports = mongoose.model('ActivitiesTable' , activitiesSchema , 'ActivitiesTable');