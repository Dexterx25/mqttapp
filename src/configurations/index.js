const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, './.env') })

const  config = {

    ttn_connection: {
        appID:process.env.TTN_APP_ID || '',
        accessKey:process.env.TTN_ACCESS_KEY || ''
    },
    environment_app:{
        host:process.env.HOST || 'localhost',
        port:process.env.PORT || '3000'
    },
    type_conection:{
        ttn:false,
        remote_mqtt:true
    },
    type_storage:{
        local_db:false,
        influx:true,
        redis:false
    },
    type_frontend:{
        any_device:false,
        grafana:true
    },
    mqtt_service:{
        host:process.env.HOST_MQTT || '',
        port:process.env.PORT_MQTT || ''
    }

}

module.exports = config