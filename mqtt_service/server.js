
 const express = require('express');
 const app = express();
 const bodyParser = require('body-parser') 
 
 const datas = require('./httpconnection/network')
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false })) 

 app.use('/', datas)


var server = app.listen(3000, function () {    
var host = server.address().address    
var port = server.address().port 
console.log("Example server listening at localhost:%s", host, port) })