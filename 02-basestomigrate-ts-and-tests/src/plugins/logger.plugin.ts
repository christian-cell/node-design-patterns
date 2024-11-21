import winston , { format }  from 'winston';
const { combine, timestamp, json } = format || {};

export const logger = winston.createLogger({

    level: 'info',
    format: combine(
        timestamp(),
        json(),
    ),
    // defaultMeta: { service: 'user-service' },
    transports: [

        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }) 
    ]
})

/* 
* tan solo a nivel local
*/
logger.add(new winston.transports.Console({

    format: winston.format.simple(),
}));

/* 
* using a factory function, la siguiente config para un entorno no local
*/
export const buildLogger = ( service : string ) => {

    return{

        log: (message : string) => {

            logger.log('info',{ message, service});
        
        },error : (message : string) => {

            logger.error('error', { 
                message, 
                service/* , 
                at: new Date().toISOString() //using combine config to timeStamp the log */
            });
        }
    }
}