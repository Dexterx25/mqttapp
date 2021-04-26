const mqtt = require('mqtt')
const { parsers } = require('serialport')
const serialport = require('serialport')

 const port = new serialport('COM4',{
      baudRate: 9600
})

const parser = port.pipe(new serialport.parsers.Readline({delimiter: '\n'}))

const client = mqtt.connect('mqtt://192.168.1.51')

client.on('connect', () => {
    parser.on('data', (data)=>{
        client.publish('TheTopicUSB-->', data)
    })
})