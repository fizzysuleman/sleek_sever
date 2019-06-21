const winston = require('winston')
require('winston-mongodb')
require('express-async-errors')


module.exports=function(){
    process.on('unhandledRejection', (ex) => {
        throw (ex)
      })
      
      
      winston.configure({
        transports:
          [
            new winston.transports.Console({
                colorize: true, prettyPrint: true,level:'silly',handleExceptions: true
              }),
            new winston.transports.File({
              filename: 'logfile.log', handleExceptions: true
            }),
            new winston.transports.MongoDB({ 
              db: 'mongodb://localhost/slicky',
              level: 'info',
              handleExceptions: true
            }),
      
          ],
        //exitOnError:false
      });
      
}