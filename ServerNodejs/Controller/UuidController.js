const express = require('express');
const router = express.Router();
const UuidDatabase = require('../Database/UuidDatabase');

var uuidDatabase = new UuidDatabase();
router.get('/account/:uuid' , (req , res , next) =>{
    var uuid = req.params.uuid;
    uuidDatabase.getAccountFromUuid(uuid).then((result) =>{
        res.status(result.statusCode).json(result);
    }).catch((error) =>{
        res.status(error.statusCode).json(error);
    })
})

module.exports = router;