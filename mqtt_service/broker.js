const mosca = require('mosca')
const mqtt = require('mqtt')
const broker = new mosca.Server({
    port: 1883
})

broker.on('ready', () => {
    console.log('Mosca broker is ready!')
})

broker.on('clientConnected', (client) => {
   console.warn('cliente Id-->', client.id)
})
broker.on('message', function (topic, message) {
    console.warn('this topic-->', topic, message)
    console.log(message.toString())
    client.end()
  })
broker.on('published', ( packet) =>{
    console.warn('THIS IS ThE DAta--->',(packet.payload.toString()))
})