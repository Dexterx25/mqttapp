const remote = require('./remote');
const config = require('../../config');

module.exports = new remote(config.PostgresService.host, config.PostgresService.port);