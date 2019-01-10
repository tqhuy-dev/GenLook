const express = require('express');
const router = express.Router();
const OfficeAddressDatabase = require('../Database/OfficeAddressDatabase');

var office = new OfficeAddressDatabase();

router.get('/', (req, res , next) =>{
    var promise = office.getAllAddress();
    promise.then((data) =>{
        res.status(200).json(data);
    }).catch((error) =>{
        res.status(401).json(error);
    })
});

module.exports = router;