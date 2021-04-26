const express = require('express')
const controller = require('./index')

const router = express.Router(); 


router.get('/', function (req, res) { 
    console.warn('THIS DATA COME--->', req)
res.send("Hello from Server"); 
}) 


router.post('/', function(req, res) {
console.log("sice network:-->",req.body); 
controller.add(req.body)

 .then((respon)=>{
  console.warn('this is the response--->', respon)
  })
  .catch((error)=>{
  console.warn('this is the error--->', error)
 })

}) 

module.exports = router;
