const Promise = require('bluebird');
const city = require('../Model/CityModel');
const constant = require('../Shared/Constant');
const activities = require('../Model/ActivitiesModel');
const mongoose = require('mongoose');
const common = require('../Shared/Common')
const UuidDatabase = require('../Database/UuidDatabase');
const UserDatabase = require('../Database/UserDatabase');

class CityDatabase {

    getAllFamousNameCity() {
        var projection = {
            name: true,
            image: true,
            tourists: true,
            _id: true
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
                    // reject(this.getMessageAPI(400, error, []));
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL, error, []))
                } else {
                    // resolve(this.getMessageAPI(200, "Query Success", result));
                    resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS, "Query Success", result));
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

    async getCityByName(name, uuid) {
        var uuidDatabase = new UuidDatabase();
        try {
            var resultAccount = await uuidDatabase.getAccountFromUuid(uuid);
            return new Promise((resolve, reject) => {

                city.find({
                    name: name
                }, (error, result) => {
                    if (error) {
                        reject(common.getMessageAPI(400, error, []));
                    } else {
                        if (result.length > 0) {
                            var promise = this.getActivitiesbyCity(result[0]._id, resultAccount.data.account);
                            promise.then((data) => {
                                resolve(common.getMessageAPI(200, "Query Success", {
                                    information: result[0],
                                    activities: data
                                }));
                            }).catch((error) => {
                               reject(error);
                            })
                        } else {
                            reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                        }

                    }
                });
            })
        } catch (e) {
            return new Promise.reject(e);
        }
    }

    async getActivitiesbyCity(idCity, account) {
        var userDatabase = new UserDatabase();
        try {
            var resultAcitivitiesAccount = await userDatabase.getAllActivitiesAccount(account);
            console.log(resultAcitivitiesAccount);
            return new Promise((resolve, reject) => {
                activities.find({
                    city: mongoose.Types.ObjectId(idCity)
                }, function (error, result) {
                    if (error) {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND)
                    } else {
                        for(var i = 0 ; i < result.length ; i++){
                            for(var j = 0; j < resultAcitivitiesAccount.data.carts.length ; j++){
                                if(result[i]._id == resultAcitivitiesAccount.data.carts[j]){
                                    result[i].status += ' On Cart';
                                    break;
                                }
                            }
                        }
                        resolve(result);
                    }
                })
            });
        } catch (e) {
            return new Promise.reject(e);
        }
    }
}

module.exports = CityDatabase;