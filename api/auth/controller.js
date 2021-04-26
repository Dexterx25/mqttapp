const {nanoid} = require('nanoid')
const bcrypt = require('bcrypt')
const auth = require('../../../auth')

//const CTRnotification = require('../../../MSV_notifications/components/notifications/index')

module.exports = function(injectedStore){
let store = injectedStore
if(!store){
    store = require('../../../store/store')
}
////---->
let table2 = 'authentications'
let table = 'users'
//login ---->
async function insertLogin(body, encrypted_password ){
          
     const data = await store.insertLogin(body, table)
   console.log('contra sin encriptar: ', encrypted_password)
  return   bcrypt.compare(encrypted_password, data.rows[0].encrypted_password)
          .then(async areEqual=>{
              if(areEqual === true){
          const token = await auth.sign(data.rows[0])
          const dataUser = data.rows[0]       
          
    //const dataDevice = await ctrlDevice.add(dataUser, token)
    ///console.log('este es el dataDevice CONTROLLER AUTH', dataDevice)
    let respo = {
                token: token,
                user_id:dataUser.id,
                email:dataUser.email,
                provider:body.provider,
              ///  loginIdentifier: dataDevice.rows[0].identifier
          }  
          console.log('este es el respo desde CONTROLLER AUTH', respo)
          return  respo


      
        //return 'TOKEN'
        }else{
            console.log('informacion invalida')
        } 
         
    
          }) 
          .catch((e)=>{
              console.log(e)
          })
 }

//user auth
const upsertAuth = (
    respon,
    data
    ) =>{
    
   const authData = {

           uid:data.uid,
          user_id:respon.id,
          encrypted_password: data.newEncrypted_password,
          provider:data.provider

      }
      
    console.log("[authData desde Controller Auth TRAYIDO DE PROMISE USER]", authData)
   
    return  store.sendAuth(authData, table2)

}
const getReset = (data) =>{
    return new Promise( async(resolve, reject) =>{
        if(!data.email){///001172.271b70206867477e92fa7c223447bec4.0702
            reject('there are not email')
            return false
        }
        
      const respon = await store.getReset(data)
       
       resolve(respon)
    })
}

// const resetPassword = (data) =>{
// return new Promise( ( resolve, reject) =>{
//    if(data.password  !== data.password_confirmation){
//        reject('Passwords no equals, please verify')
//        return false;
//    }
//    if(!data.recovery_pin){

//    }

// })
// }

// const forgetPass = (data) =>{
// return new Promise(async(resolve, reject)=>{
//     if(!data.email){
//         reject('There are not email here')
//         return false;
//     }
    
//   const respon = await  store.forgetMyPass(data)
//   if(respon === undefined){
//     reject('Email there are incorret or not exits')
//     return false;
// }
// if(respon.email == data.email){
  
//    // if(responResetToken){
  
//    CTRnotification.resetPasswordMail(respon)
//    .then( async(res)=>{
//     console.warn('this is the estatus Email--->', res)
//       await store.inserCode(res)
//     .then((resCode) =>{
//         console.warn('resCode insert success-->', resCode)
//     })
//     .catch((error)=>{
//         console.warn('error insertCode', error)
//     })
//    })
//    .catch((error) =>{
//        console.warn('this is the error =>', error)
//    })
//    // }

// } 
// console.warn('this is the responRes since ControllerAuth--->', respon)

//   resolve(respon)

// })
// }
// const compareCode = (data) =>{
//     return new Promise(async(resolve, reject) =>{
//         if(!data){
//             reject('there are not data')
//             return false;
//         }

//         const dataToStore = await store.compareCodes(data)
//         if(dataToStore.recovery_pin == data.code){

//             console.warn('SI ES UN CODIGO CORRECTO, vamos a reiniciar esta vg de token-->', dataToStore.recovery_pin + ' EQUAL--->', data.code)
            
//         }else{
//            reject('RECOVERY CODE IS INVALID')
//         }
//           if(dataToStore.code)
//         console.warn('Status compareCodes--->', dataToStore) 
//       resolve(dataToStore)

//     })
// }
// const resetPassword = async (data) =>{
//     return new Promise(async(resolve, reject) =>{
//         if(!data){
//             reject('there are not data!')
//             return false;
//         }
//         if(data.password == data.confirmPassword){
//             console.warn('se procede a encriptar la password')
//             const passwordBcrypt = await bcrypt.hash(data.password, 5)
//             const dataToStore = {
//                 newpassword:passwordBcrypt,
//                 email:data.email,
//                 code:data.code
//             }
//           const respon = await store.resetPassword(dataToStore)
//           console.warn('respon of insert newPass--->', respon)
//           if(respon.recovery_pin == data.code){
//             console.warn('se preocede a genererar token')
//             const token = auth.sign(respon)
//             console.warn('this is the token--->', token)
//             resolve(token)
//          }
//         }else{
//             reject('password and confirmapPassWord dont are equals')
//             return false;
//         }
     
     


//     })
// }
return{
    upsertAuth,
    insertLogin,
    getReset,
    reset:resetPassword,
    forgetPass,
    compareCode
    

}


}