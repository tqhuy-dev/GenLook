const common = require('../Shared/Common');
const constant = require('../Shared/Constant');
const mongoose = require('mongoose');
const uuidModel = require('../Model/UuidModel');
const Promise = require('bluebird');
class UuidTable {

    getAccountFromUuid(uuid) {
        var projection = {
            _id: false
        }
        return new Promise((resolve, reject) => {
            uuidModel.findOne({
                uuid: uuid
            } , projection , function (error, result) {
                if (error) {
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL , error , []));
                } else {
                    resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS , "Query Success" , result));
                }
            })
        })
    }
}

module.exports =UuidTable;