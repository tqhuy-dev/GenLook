const mongoose = require('mongoose');

const OfficeAddressSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    address: String,
    city: String,
    phone: String,
    status: String,
    open: String,
    close: String,
});

module.exports = mongoose.model('OfficeAddressTable' , OfficeAddressSchema , 'OfficeAddressTable');
