const offices = require('../Model/OfficeAddressModel');
const Promise = require('bluebird');
const common = require('../Shared/Common');
const constant = require('../Shared/Constant');

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
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL , error , []));
                } else {
                    if(result.length < 1) {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                    } else {
                        resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS , "Query Success" , result));
                    }
                }
            });
        })
    }
}

module.exports = OfficeAddressDatabase;