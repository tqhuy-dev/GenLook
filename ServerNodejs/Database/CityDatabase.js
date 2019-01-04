const Promise = require('bluebird');
const city = require('../Model/CityModel');
class CityDatabase {
    getAllFamousNameCity() {
        var projection = {
            name: true,
            _id: false
        }

        var sortCustomize = {
            skip: 0,
            limit: 2,
            sort: {
                tourists: -1
            }
        }

        return new Promise((resolve, reject) => {
            city.find({}, projection, sortCustomize, (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            })
        });
    }

    getAllData(){
        return new Promise((resolve , reject)=>{
            city.find({},(error , result)=>{
                if(error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }
}

module.exports = CityDatabase;