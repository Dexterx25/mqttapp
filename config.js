const config = { 

    DBconfig:{
        user: 'confirmapp',   
        password: 'Pjr11097',
        host: 'localhost',
        database:'node_confirmapp'
    },
   
    jwt:{
        secret: process.env.JWT_SECRET ||  'SECRETOINCRIPTACION'
        //redis password: confirmapp-redisserverpjr110971asr1243cbv
        //changed for this: q6mUvhd8y7539z+yMGFnQetknyTPhmQvlgaIwrxDjKojljEjNhKQY72Tpmc2PyD02VbamA7B2GcPtyDar
    },
   
    PostgresService:{
        host: process.env.PSQL_SRV_HOST || '18.221.124.216',
        port: process.env.PSQL_SRV_PORT || 3001
    },
    
    api:{
    port: process.env.PORT || 3000,
    host: process.env.HOST || '18.221.124.216',
    publicRoute: process.env.PUBLIC_ROUTE || 'app'
    },
    
    notificationsService:{
        host: process.env.NOTIFICATIONS_SRV_HOST || '18.221.124.216',
        port: process.env.NOTIFICATIONS_SRV_PORT || 4000,  
    },
    
    devicesService:{
        host:process.env.DEVICES_SRV_HOST || '18.221.124.216',
        port:process.env.DEVICES_SRV_PORT || 3008
    },
    ////////////////////////////////////////////////////
    
    cacheService:{
    host: process.env.CACHE_SRV_HOST || 'http://18.221.124.216',
    port: process.env.CACHE_SRV_PORT || 3003
    },
    
    redis:{
        host: process.env.REDIS_SRV_HOST || '127.0.0.1',
        port: process.env.REDIS_SRV_PORT || 6379,
       //pasword: process.env.REDIS_SRV_PORT  || 'q6mUvhd8y7539z+yMGFnQetknyTPhmQvlgaIwrxDjKojljEjNhKQY72Tpmc2PyD02VbamA7B2GcPtyDar'
    },
    
    EmailService:{
        NewUserInvitation:{
    //host:"smtp.ethereal.email",
            host:"smtp.gmail.com",
            port:465,
            secure:true,
           auth:{
             //  user:"jillian.zieme@ethereal.email",
             user:"confirmapphw@gmail.com",  
            // password:"YhsaV5pEyFUXeuKBJC"
            password:"uexfxodrnoonxofd"
            }
        }
    }
    
    }
    
    module.exports = config 
    