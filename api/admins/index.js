
const config = require('../../../config');

let store, cache;

    store = require('../../../store/store');
    cache = require('../../../store/redis');


const controller = require('./controller');


module.exports = controller(store, cache);