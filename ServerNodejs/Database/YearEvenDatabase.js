const yearEven = require('../Model/YearEvenModel');
const constant = require('../Shared/Constant');
const common = require('../Shared/Common');

class YearEvenDatabase {
    getAllEvent() {
        var projection = {
            _id:true,
            name:true,
            rateStart:true,
            mainPrice:true,
            salePrice:true,
            status:true,
        }
        return new Promise((resolve , reject) =>{
            yearEven.find({} ,projection, function(error , result){
                if(error){
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL,error,[]));
                } else {
                    if(result.length > 0){
                        resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS,"Query Success",result));
                    } else {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                    }
                }
            });
        });
    }
}

module.exports = YearEvenDatabase;