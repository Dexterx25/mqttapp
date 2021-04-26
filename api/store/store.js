const {insertDatas} = require('../utilsDatabases')

//ADD DHT TELEMETRIES--->
const add = async (data, table, type) =>{
    
console.warn('THIS IS THE DATA TO ADD TELEMETUES---', data, table, type)
    try {
   const respon = await insertDatas(data, table)
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
add,
getSingle,
getAll, 
update, 
remove
}