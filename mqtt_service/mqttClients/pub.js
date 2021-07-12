const mqtt = require('mqtt')
const config = require('../../config')
//const { parsers } = require('serialport')
const serialport = require('serialport')

if(config.mqtt_config.publisher.serial_conexion == true){
  const port = new serialport('COM4',{
       baudRate: 9600
 })
}


//const parser = port.pipe(new serialport.parsers.Readline({delimiter: '\n'}))


const client = mqtt.connect('mqtt://192.168.1.62')

client.on('connect', function(){
//setInterval(()=>{
            client.publish('inTopic', "0")
          //  client.publish('message', "xdddd")
            console.warn('message Sent')
//     },5000)
})

