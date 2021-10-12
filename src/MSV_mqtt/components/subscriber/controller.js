const controllerDevices = require('../../../api/components/devices/controller')()
const store =  require('../../../store/index')
module.exports = function (params) {
    let table = 'telemetries'
    const create = async (client_id, topic, message) =>{
            console.log('THIS IS DATASSSS--->', client_id, topic, message) 
            await store.writePoints({topic, message, table})
    }
    return{
        create:create
    }
}