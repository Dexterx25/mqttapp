const express = require('express')
const response = require('../../../network/response')
const controller = require('./index')
const router = express.Router();

router.post('/login', function(req, res){
    controller.insertLogin(req.body, req.body.encrypted_password)

  
      .then((token)=>{
        if(!token){         

           response.error(req, res, 'user not authorized or credentials invalid', 403,  'user not authrized' )
        }else{         
            console.log('fue consumido')

          response.success(req, res,  token, 201)
        }
        
        })
       .catch((error)=>{
        response.error(req, res, error, 404)
      })
})

// router.get('/passwords/user', function(req, res, next){
//   const dataRequest = {
//       email:req.body.email
//   }
  
//   controller.getReset(dataRequest)
//   .then((respon)=>{
//     response.success(req, res, respon, 200)
//   })
//   .catch((e)=>{
//       response.error(req, res, e, 400)
//   })
  
//   })
  
  router.post('/forget-password', function(req, res, next){ 
    console.warn('THIS IS THE RE1---->', req.body)
      // const dataRequest = {
      //         email: req.body.email,
      //         recovery_pin:req.body.recovery_pin,
      //         password:req.body.password,
      //         password_confirmation:req.body.password_confirmation
      // }
      const dataToController = {
        email:req.body.email
      }
      controller.forgetPass(dataToController)
      .then((respon) =>{
          response.success(req, res, respon, 200)
      })
      .catch((e)=>{
        console.log('e-->',e)
          response.error(req, res, e, 404)
      })
  })

  router.post('/recovery-code', function(req, res ){
    const dataToController = {
      code: req.body.recoveryPin,
      email:req.body.email
    }
    console.warn('data RECOVERY-code--->', dataToController)
    controller.compareCode(dataToController)
    .then((respon) =>{
       response.success(req, res, respon, 200) 
    })
    .catch((error)=>{
      console.log('verdadero error', error)
      response.error(req, res, 'codigo Incorrecto', 400)
    })
  })
  
  router.put('/reset-password', function(req, res){
    const dataToStore = {
      code:req.body.recovery_pin,
      password:req.body.password,
      confirmPassword:req.body.password_confirmation,
      email:req.body.email
    }
     console.warn('dataResetPassword',dataToStore)
     controller.reset(dataToStore)
     .then((respon) =>{
       response.success(req, res, respon, 202)
     })
     .catch((error) =>{
       console.warn('this is the error->', error)
       response.error(req, res, 'interanlError', 500 )
     })
  })


module.exports = router;