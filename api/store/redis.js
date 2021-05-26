// const redis = require('redis');

// const config = require('../../config');

// const client = redis.createClient({
//     host: config.redis.host,
//     port: config.redis.port,
//   //  password: config.redis.password,
// });

// function list(table) {
//     return new Promise((resolve, reject) => {
//         client.get(table, (err, data) => {
//             if (err) return reject(err);

//             let res = data || null;
//             if (data) {
//                 res = JSON.parse(data);
//             }
//             resolve(res);
//         });
//     });
// }

// function get(id, table) {
//     return get(table + '_' + id);
// }
// // async function upsert(req, res, next) {
// //     const datos = await store.upsert(req.body, req.params.table)
// //    // response.success(req, res, datos, 200);
// // }

// async function update(data, table) {
//     let key = table;
//     if (data && data.id) {
//         key = key + '_' + data.id;
//     }


//     client.setex(key, 40, JSON.stringify(data));
//     return true;
// }

// async function create(table, data){

// }

// module.exports = {
//     list,
//     get,
//     create,
//     update
// };