const mosca = require('mosca')
const mqtt = require('mqtt')
const networkSuscriber = require('./components/subscriber/network')
const broker = new mosca.Server({
    port: 1883
})
mqtt.connect('mqtt://localhost:1883')



broker.on('ready', () => {
    console.log('Mosca broker is ready!')
})

broker.on('clientConnected',async  (client) => {
       await networkSuscriber(client)       
})

