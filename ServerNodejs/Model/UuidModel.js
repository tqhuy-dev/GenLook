const mongoose = require('mongoose');

const UuidSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    account: String,
    loginTime: String,
    uuid: String
});

module.exports = mongoose.model('uuidTable' , UuidSchema , 'uuidTable');