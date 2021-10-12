let clients_id = ['nodeMcuAngieMarriaga']

async function secure(client_id) {
        console.log('CLIENT SECUREEE', client_id)
  return new Promise((resolve, reject) =>{
        if(clients_id.findIndex( e => e == clients_id) == -1 ){
                console.log('NOPE')
                reject({msg:'Este cliente no está permitido!'})
        }else{
                console.log('YEEEP')
                resolve(client_id)
        }
  })
}

module.exports = secure