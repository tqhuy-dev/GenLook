const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const GenServicesDatabase = require('../Database/GenServicesDatabase');
const constant = require('../Shared/Constant');

var genServicesTable = new GenServicesDatabase();

router.get('/',(req , res , next) =>{
    var promise = genServicesTable.getAllServices();
    promise.then((data) => {
        res.status(200).json(data);
    }).catch((error) =>{
        res.status(401).json({
            messaage:error
        })
    })
});

router.get('/:name/:api_accept_key',(req , res , next) =>{
    if(req.params.api_accept_key === constant.API_ACCESS_KEY_DEV){
        var promise = genServicesTable.getServicesByName(req.params.name , req.body.city);
        promise.then((data) =>{
            res.status(data.statusCode).json(data);
        }).catch((error) =>{
            res.status(error.statusCode).json(error);
        })
    }
});

module.exports = router;