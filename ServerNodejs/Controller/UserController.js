const express = require('express');
const router = express.Router();
const UserDatabase = require('../Database/UserDatabase');

var userDatabase = new UserDatabase();

router.put('/signin' , (req , res , next) =>{
    var promise = userDatabase.createAccount(req);
    promise.then((data) =>{
        res.status(data.statusCode).json(data);
    }).catch((error) =>{
        res.status(error.statusCode).json(error);
    })
});

router.post('/login' , (req , res , next) =>{
    var promise = userDatabase.loginAccount(req);
    promise.then((data) =>{
        res.status(data.statusCode).json(data);
    }).catch((error) =>{
        res.status(error.statusCode).json(error);
    })
})

router.get('/' , (req , res , next) =>{
    var promise = userDatabase.getAllData();
    promise.then((data) =>{
        res.status(200).json(data);
    }).catch((error) =>{
        res.status(401).json(error);
    })
})

router.post('/password' , (req , res , next) =>{
    userDatabase.changePassword(req).then((data) =>{
        res.status(data.statusCode).json(data);
    }).catch((error) =>{
        res.status(error.statusCode).json(error);
    })
})

module.exports = router;