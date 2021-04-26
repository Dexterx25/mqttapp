
/
const auth = require('../Auth')
const {nanoid} = require('nanoid')
const bcrypt = require('bcrypt')
const config = require('../../../config')
const jwt = require('jsonwebtoken')
const controllerAuth = require('../Auth/index')
const controllerDevice = require('../../../MSV_devices/components/devices/index')
const { get } = require('../../../store/store')
const { getReset } = require('.')
const { resolve } = require('path')
const { reject } = require('lodash')
module.exports = function(injectedStore, injectedCache){
    let cache = injectedCache
    let store = injectedStore
    
    if(!store ){
          store = require('../../../store/store') 
    }
    if(!cache ){
        cache = require('../../../store/store') 
  }
  let table = 'users'
 async function add(data){
  return new Promise (async(resolve, reject)=>{
      if(!data){
          reject('there Are Not data!')
          return false;
      }
 const respon = await  store.send_I_ADM(data, table)
     resolve(respon)
  })
 }
 async function remove(data){
    return new Promise (async(resolve, reject)=>{
      if(!data){
        reject('there Are not a data!')
        return false;
      }
      const respon = await  store.delete_I_ADM(data, table)
      resolve(respon)
    })
 }

 async function get(data){
    return new Promise (async(resolve, reject)=>{
      if(!data){
        reject('there Are not a data!')
        return false;
      }
      const respon = await  store.get_I_ADM(data, table)
      resolve(respon)
    })
 }



    return  {
        add,
        remove,
        get
    }
}

