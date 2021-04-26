const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config')
const router = require('./network');


const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', router)


app.listen(config.cacheService.port, ()=>{
    console.log('Servicio Base de datos en:', config.cacheService.port)
})