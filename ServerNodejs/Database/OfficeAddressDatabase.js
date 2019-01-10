const offices = require('../Model/OfficeAddressModel');
const Promise = require('bluebird');

class OfficeAddressDatabase {

    getAllAddress() {

        var projection = {
            _id:true,
            address:true,
            city:true
        }

        return new Promise((resolve, reject) => {
            offices.find({}, projection, function (error, result) {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        })
    }
}

module.exports = OfficeAddressDatabase;