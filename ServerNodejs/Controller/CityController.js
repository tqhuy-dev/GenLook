const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const CityDatabase = require('../Database/CityDatabase');

cityDatabase = new CityDatabase();

router.get('/PopularCity', (req , res , next) =>{
    var promise = cityDatabase.getAllFamousNameCity();
    promise.then((data) =>{
        res.status(200).json(data);
    }).catch((error) =>{
        res.status(401).json(error);
    })
});

router.get('/' , (req , res , next) =>{
    var promise = cityDatabase.getAllData();
    promise.then((data)=>{
      res.status(200).json(data);  
    }).catch((error)=>{
        res.status(401).json({
            message:error
        })
    })
});

module.exports = router;