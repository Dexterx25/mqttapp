const express = require('express');
const bodyParser = require('body-parser');

const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const config = require('../configurations/index');  

const cors = require('cors')
const app = express()
let devices = require('./components/devices/network')

app.listen(config.environment_app.port, async ()=>{
    console.log('APP RUNIINT IN',config.environment_app.host + config.environment_app.port)
    try {
   const res = await devices()
   console.log('RESPONSE DEVICES TTN-->', res)
    } catch (error) {
      console.log('THERE ARE A ERROR --->', error)  
    }
})