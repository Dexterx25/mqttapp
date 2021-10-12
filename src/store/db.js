const Influx = require('influx')
const influx = new Influx.InfluxDB({
    database:'telemetries_environment',
    username:'mariaga',
    password:'$2y$12$UWpxiZi3UaF7ZyKeySCpB.5Z5FfRtAAkgYuQz.m4qnLUFR7CmTOu',
    schema: [
      {
        measurement: 'response_times',
        fields: {
          path: Influx.FieldType.STRING,
          duration: Influx.FieldType.INTEGER
        },
        tags: [
          'host'
        ]
      }
    ]
  })
module.exports = influx