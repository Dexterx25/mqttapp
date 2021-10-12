const store = require('../../../store/index')

module.exports =  function controller() {
    const createDataMQTT = (client_id, topic, message) =>{
        console.log('datas Client--->', client_id, topic, message)
    }
    return{
        createDataMQTT
    }
}