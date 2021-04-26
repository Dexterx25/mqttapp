const express = require('express');

const response = require('../network/response');
const store = require('../store/redis');

const router = express.Router();

router.get('/:table', list);
router.get('/:table/:id', get);
//router.post('/:table', create);
router.put('/:table', update);

//async
 

async function list(req, res, next) {
   const datas = await store.list(req.params.table)
   response.success(req, res, datas, 200)
  //  //const data = await
  //   store.list(req.params.table)
  // //  response.success(req, res, "succefull", data.rows, 300)
    
  //     .then( (data)=>{
  //         response.success(req, res, data, 200);
    
  //          })
  //          .catch(e=>{
  //              response.error(req, res, "internal Error", 500, e)
  //         })
}

 //async 
 async function get(req, res, next) {
    const datas  =  await store.get(req.params.id, req.params.table)
    response.success(req, res, datas, 200)
    // store.get(req.params.id, req.params.table)

    // .then( (data)=>{
    //     response.success(req, res, data, 200);
  
    //      })
    //      .catch(e=>{
    //          response.error(req, res, 200, e)
    //     })
   
}
async function update(req, res, next) {
  const datas = store.update(req.body, req.params.table)
   response.success(req, res, datas, 202)
  //  // console.log('this is the data [NETWORK PSQL]', data)  
//      .then( (data) =>{
//         response.success(req, res, data, 202)
//      })
//      .catch( (err) =>{
//         response.error(req, res, 'error', 500, err)
//      })
        
 }

async function create(req, res, next) {
  const data = await store.create(req.body, req.params.table)

  response.success(req, res, data.rows, 201)
  console.log('this is the data [NETWORK PSQL]', data)  
}





module.exports = router;
