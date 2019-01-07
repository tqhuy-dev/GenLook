const activities = require('../Model/ActivitiesModel');
const Promise = require('bluebird');
const constant = require('../Shared/Constant');

class ActivitiesDatabase {
    getAllData(){
        return new Promise((resolve , reject) =>{
            activities.find({} , function(error , result){
                if(error){
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        });
    }
}

module.exports = ActivitiesDatabase;