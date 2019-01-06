const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const GenServicesDatabase = require('../Database/GenServicesDatabase');

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

module.exports = router;