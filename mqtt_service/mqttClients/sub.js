const mqtt = require('mqtt')
const store = require('../store/store')

let table = 'dhttelemetries'
const sub = mqtt.connect('mqtt://localhost:1883')
sub.on('connect', () => {
    sub.subscribe('outTopic')
    sub.subscribe('temperature')
    sub.subscribe('humidity')
})

sub.on('message', (topic, message) => {
    console.warn('THIS IS TEH Message-->', topic, message.toString())
    const data = message.toString()
 //   store.upsert(data, table, topic)
 
})

