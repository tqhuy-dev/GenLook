const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const CityDatabase = require('../Database/CityDatabase');
const constant = require('../Shared/Constant');

cityDatabase = new CityDatabase();

router.get('/popular/:api_access_key_dev', (req, res, next) => {
    if (req.params.api_access_key_dev === constant.API_ACCESS_KEY_DEV) {
        var promise = cityDatabase.getAllFamousNameCity();
        promise.then((data) => {
            res.status(200).json(data);
        }).catch((error) => {
            res.status(401).json(error);
        })
    } else {
        res.status(401).json({
            message: 'no permission'
        })
    }

});

router.get('/', (req, res, next) => {
    var promise = cityDatabase.getAllData();
    promise.then((data) => {
        res.status(200).json(data);
    }).catch((error) => {
        res.status(401).json({
            message: error
        })
    })
});

router.get('/:name/:api_access_key_dev', (req, res, next) => {
    var name = req.params.name;
    var api_access_key_dev = req.params.api_access_key_dev;

    if (api_access_key_dev === constant.API_ACCESS_KEY_DEV) {
        if (name.length < 15) {
            cityDatabase.getCityByName(name).then((data) => {
                res.status(200).json(data);
            }).catch((error) => {
                res.status(error.statusCode).json(error);
            });
        }
    } else {
        res.status(401).json(constant.ERROR_MESSAGE_UNAUTHORIZED)
    }

});

module.exports = router;