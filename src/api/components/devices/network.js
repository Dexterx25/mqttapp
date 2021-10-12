const express = require('express')
const controller = require('./index')
const secure = require('./secure')
const {appID, accessKey} = require('../../../configurations/index').ttn_connection
let {type_conection, type_frontend, type_storage} = require('../../../configurations/index')

import { application as App, key } from "ttn"

// discover handler and open mqtt connection

const main = async function () {




    const application = await App(appID, accessKey)

  // set the payload functions
  await application.setCustomPayloadFunctions({
    decoder: `
      function Decoder(payload) {
        return { led: 1 };
      }
    `,
  })

  // get the application info
  const app = await application.get()
  console.log('APLICATION INFO--->', app)

  const euis = await application.getEUIs()

  // register a new device
  await application.registerDevice("foo", {
    description: "Description",
    appEui: euis[0],
    devEui: "9988776655443322",
    devAddr: "11223344",
    nwkSKey: key(16),
    appSKey: key(16),
    appKey: key(16),
  })

  // list the apps devices
  const devices = await application.devices()
  console.log('THIS IS THE DEVICES--->', devices)

  
}

module.exports = main