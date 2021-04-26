const express = require('express');
const bodyParser = require('body-parser');
const https = require('https')
var fs = require('fs')

//const swaggerUi = require('swagger-ui-express');

const config = require('../config.js');  
const cors = require('cors')
const user = require('./components/user/network');
const auth = require('./components/Auth/network');
const admins = require('./components/admins/network');
const errors = require('../network/errors');

const app = express();
//const server = require('http').Server(app)
app.use(bodyParser.json());
//const socket = require('../socket')
//const swaggerDoc = require('./swagger.json');

// ROUER
app.use('/api/users', user);
app.use('/api/auth', auth);
app.use('/api/admins', admins)
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/app', express.static('public'));
//const path = require('path')
//socket.connect(server)
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
//app.use('/app', express.static('public'));
app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api escuchando en el puerto ', config.api.port);
});

