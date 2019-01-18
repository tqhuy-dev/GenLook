const common = require('../Shared/Common');
const constant = require('../Shared/Constant');
const mongoose = require('mongoose');
const uuidModel = require('../Model/UuidModel');
const Promise = require('bluebird');
class UuidTable {
    
    getAccountFromUuid(uuid) {
        return new Promise((resolve, reject) => {
            uuidModel.findOne({
                uuid: uuid
            }, function (error, result) {
                if (error) {
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL , error , []));
                } else {
                    if(result !== null) {
                        resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS , "Query Success" , result));
                    } else {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                    }
                }
            })
        })
    }
}