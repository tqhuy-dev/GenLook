const http = require('http');
const request = require('request');
const port = process.env.port || 3000;
const app = require('./app')
const server = http.createServer(app);

server.listen(port , function(){
    console.log('Express server is listening port:' + port);
});
