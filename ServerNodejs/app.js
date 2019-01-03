const express = require('express');
const app = express();
const fs = require('fs');
const userController = require('./Controller/UserController');
const bookController = require('./Controller/BookController');
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const blockchainController = require('./Controller/BlockchainController');

//connect mLab Database
// mongoose.connect('mongodb://tqhuy:Husky12345@ds153709.mlab.com:53709/database-test',{
//     useNewUrlParser :true
// })

//connect robo3T database 
mongoose.connect('mongodb://localhost:27017/GenBook',{
    useNewUrlParser :true
})

// initialize morgan and bodyParser
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

  
// initialize handle error
// app.use((req , res , next) => {
//     const error = new Error('Not Found')
//     error.status = 404
//     next(error)
// })

// app.use((error , req , res , next) =>{
//     res.status(error.status || 500);
//     res.json({
//         error:{
//             message : error.message
//         }
//     })
// })

// test api active
app.get('/api/v1/data/genbook' , (req , res , next) =>{
    res.status(200).json({
        message:'api is working',
        status:'success'
    })
});

// set api router
app.use('/api/v1/users' , userController);
app.use('/api/v1/books' , bookController);
app.use('/api/v1/blockchain' , blockchainController);

module.exports = app;