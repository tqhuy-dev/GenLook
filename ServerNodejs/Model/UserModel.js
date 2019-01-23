const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    account: {type:String , required:true},
    password: {type:String , required:true},
    firstName: String,
    lastName: String,
    birthday: String,
    point: Number,
    level: Number,
    friends:[{
        name: String,
        friendlyPoint:Number,
        id: String,
    }],
    carts:[],
    ticket:[]
},{versionKey:false});

module.exports = mongoose.model('UserTable' , UserSchema  , 'UserTable');