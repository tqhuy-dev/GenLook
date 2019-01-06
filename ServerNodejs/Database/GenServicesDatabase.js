const Promise = require('bluebird');
const genServices = require('../Model/GenServicesModel');

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
                    resolve(data);
                }
            });
        });
    }

    getServicesByName(name) {
        return new Promise((resolve , reject) =>{
            genServices.find({name:name} , function(error,data){
                if(error) {
                    reject(error);
                } else {
                    resolve(data);
                }
            })
        });
    }
}

module.exports = GenServiceTable;