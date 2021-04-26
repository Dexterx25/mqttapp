const express = require('express')
const secure = require('./secure.js')
const response = require('../../../network/response')
const controller = require('./index')
const router = express.Router()

router.get('/', (req, res, next)=>{

controller.get()

})

router.post('/', (req, res, next)=>{
    
})

router.put('/visualization/:event_id', (req, res, next)=>{
    const dataToController = {
        
    }
})

router.delete('/', (req, res, next)=>{
    
})



module.exports = router