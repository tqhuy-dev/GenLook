const express = require('express');
const router = express.Router();
const ActivitiesDatabase = require('../Database/ActivitiesDatabase');

var activities = new ActivitiesDatabase();

router.get('/', (req , res , next) =>{
    var promise = activities.getAllData();
    promise.then((data) =>{
        res.status(200).json(data);
    }).catch((error) =>{
        res.status(401).json(error);
    })
});

module.exports = router;