const Promise = require('bluebird');
const city = require('../Model/CityModel');
const constant = require('../Shared/Constant');
class CityDatabase {

    getMessageAPI(code,message,result){
        var messageBody = {
            statusCode:code,
            message:message,
            data:result
        }
        return messageBody;
    }

    getAllFamousNameCity() {
        var projection = {
            name: true,
            image: true,
            tourists: true,
            _id: false
        }

        var sortCustomize = {
            skip: 0,
            limit: 10,
            sort: {
                tourists: -1
            }
        }

        return new Promise((resolve, reject) => {
            city.find({}, projection, sortCustomize, (error, result) => {
                if (error) {
                    reject(this.getMessageAPI(400,error,[]));
                } else {
                    resolve(this.getMessageAPI(200,"Query Success",result));
                }
            })
        });
    }

    getAllData() {
        return new Promise((resolve, reject) => {
            city.find({}, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    getCityByName(name) {
        return new Promise((resolve, reject) => {

            var projection = {
                _id:false,
            }

            city.find({name: name} , projection, (error, result) => {
                if (error) {
                    reject(this.getMessageAPI(400,error,[]));
                } else {
                    if (result.length > 0) {
                        resolve(this.getMessageAPI(200,"Query Success",result));
                    } else {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                    }

                }
            });
        })
    }
}

module.exports = CityDatabase;