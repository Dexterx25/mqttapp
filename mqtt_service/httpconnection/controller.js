module.exports = function(injectedStore, injectedCache){
    let cache = injectedCache
    let store = injectedStore
    
    if(!store ){
          store = require('../store/store') 
    }
    if(!cache ){
        cache = require('../store/store') 
  }
let table = 'dhttelemetries'
  const add = (data) =>{
    console.warn('data', data)
    return new Promise(async(resolve, reject)=>{
            if(!data){
                reject('there are not Telemetries--->', data)
            }
       const responAdd =   await  store.add(data, table)            
        console.warn('THIS IS THE RESPON ADD TELEMETRIES--->', responAdd)        
       resolve(responAdd)
    })  
}

  return  {
   add
  }

}