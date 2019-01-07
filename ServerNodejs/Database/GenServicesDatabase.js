const Promise = require('bluebird');
const genServices = require('../Model/GenServicesModel');
const constant = require('../Shared/Constant');
const common = require('../Shared/Common');

class GenServiceTable {
    
    getAllServices(){

        var projection = {
            _id:false
        }

        return new Promise((resolve , reject) => {
            genServices.find({},projection , function(error, data){
                if(error){
                    reject(error);
                } else {
                    resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS , "Query Success" , data));
                }
            });
        });
    }

    getServicesByName(name , city) {
        return new Promise((resolve , reject) =>{

            var filter = {
                name:name
            }

            if(city !== "All")
            {
                filter.city = city;
            }

            genServices.find(filter , function(error,data){
                if(error) {
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL , error , []));
                } else {
                    if(data.length > 0){
                        resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS , "Query Success" , data))
                    } else {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                    }
                }
            })
        });
    }
}

module.exports = GenServiceTable;