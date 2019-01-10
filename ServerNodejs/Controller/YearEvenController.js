const express = require('express');
const router = express.Router();
const YearEvenDatabase = require('../Database/YearEvenDatabase');

var yearEvenDatabase = new YearEvenDatabase();

router.get('/' , (req , res , next) =>{
    var promise = yearEvenDatabase.getAllEvent();

    promise.then((data) =>{
        res.status(data.statusCode).json(data);
    }).catch((error) =>{
        res.status(data.statusCode).json(error);
    })
})

module.exports = router;