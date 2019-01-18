const mongoose = require('mongoose');
const User = require('../Model/UserModel');
const common = require('../Shared/Common');
const constant = require('../Shared/Constant');
const Promise = require('bluebird');
const uuid = require('uuid/v4');
const UuidDatabase = require('../Database/UuidDatabase');

class UserDatabase {

    getAllData() {
        return new Promise((resolve, reject) => {
            User.find({}, function (error, result) {
                if (error) {
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL, error, []));
                } else {
                    if (result.length < 1) {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                    } else {
                        resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS, "Query Success", result));
                    }
                }
            });
        });
    }

    createAccount(req) {
        var newUser = new User({
            _id: new mongoose.Types.ObjectId,
            account: req.body.account,
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            birthday: req.body.birthday,
            point: 0,
            level: 0,
            friends: [],
            carts: []
        })

        return new Promise((resolve, reject) => {
            User.create(newUser, function (error, result) {
                if (error) {
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL, error, []));
                } else {
                    resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS, "create success", result));
                }
            })
        })
    }

    loginAccount(req) {
        return new Promise((resolve, reject) => {
            this.findAccount(req).then((data) => {
                if (data) {
                    resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS, uuid(), []));
                } else {
                    reject(constant.ERROR_MESSAGE_LOGIN_FAIL);
                }
            }).catch((error) => {
                reject(common.getMessageAPI(constant.ERROR_MESSAGE_UNAUTHORIZED, error, []));
            })
        })
    }

    changePassword(req) {
        return new Promise((resolve, reject) => {
            User.findOneAndUpdate({
                account: req.body.account,
                password: req.body.password
            }, {
                password: req.body.newPass
            }, function (error, result) {
                if (error) {
                    reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL, error, []));
                } else {
                    if (result !== null) {
                        resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS, "Query Success", result));
                    } else {
                        reject(constant.ERROR_MESSAGE_DATA_NOT_FOUND);
                    }
                }
            })
        })
    }

    findAccount(req) {
        var password = req.body.password;
        var account = req.body.account;

        return new Promise((resolve, reject) => {
            User.findOne({
                account: account,
                password: password
            }, function (error, result) {
                if (error) {
                    reject(false);
                } else {
                    if (result !== null) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                }
            })
        });
    }

    async addActivitiesIntoCart(idActivites, uuid) {
        var uuidDatabase = new UuidDatabase();
        var result;
        try {
            var result = await uuidDatabase.getAccountFromUuid(uuid);
            return new Promise((resolve, reject) => {
                User.findOneAndUpdate({
                    account: result.data.account
                }, {
                    $push: {
                        carts: idActivites
                    }
                }, function (error, result) {
                    if (error) {
                        reject(common.getMessageAPI(constant.STATUS_CODE_QUERY_FAIL, error, []));
                    } else {
                        resolve(common.getMessageAPI(constant.STATUS_CODE_QUERY_SUCCESS, "Query Success", result));
                    }
                })
            })
        } catch (errorUUID) {
            return new Promise.reject(errorUUID);
        }
    }
}

module.exports = UserDatabase;