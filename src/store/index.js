const influx = require('./db')

async function writePoints({topic, message, table}) {
  console.log('datas WRITE POINT-->', message)
  influx.writePoints([
    {
      measurement:table,
      tags: { host:'localhost'}, 
      fields:
          topic == 'temp' ? {
          temp:parseInt(message)
        }:
          topic == 'hum' ? {
          hum:parseInt(message)
        }
        : topic == 'co2' ? {
          co2:parseInt(message)
        } 
        : topic == 'pm2_5' ?
        {
          pm2_5:parseInt(message)
        }
        : topic == 'pm_10' ? 
        {
          pm_10:parseInt(message)
        }
        : topic == 'nh3' ? 
        {
          nh3:parseInt(message)
        }
        : topic == 'co' ? 
        {
          co:parseInt(message)
        }
        : topic == 'latitude' ?
        {
          latitude:parseInt(message)
        }
        : topic == 'longitude' ?
        {
          longitude:parseInt(message)
        }
        :{},
      timestamp: new Date()
    }
  ]).then((res)=>{
    console.log('DATA STORED SUCCEFULL', res)
  //  console.log('datasss', datas)
  })
  .catch((er)=>{
     console.log('DATA STORED ERROR-->', er)
  })  
}

module.exports = {
writePoints
}