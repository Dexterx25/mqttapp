const {upsertDatas} = require('../utilsDatabases')

//ADD DHT TELEMETRIES--->
const upsert = async (data, table, type) =>{
    
console.warn('THIS IS THE DATA TO upsert TELEMETUES---', data, table, type)
    try {
   const respon = await upsertDatas(data, table)
    return respon
    } catch (error) {
        console.warn('THIS IS THE ERROR--->', error)    
        return error
    }
}
const getAll = () =>{

}
const getSingle = () =>{
    
}
const update = () =>{

}
const remove = () =>{

}
module.exports = {
upsert,
getSingle,
getAll, 
update, 
remove
}