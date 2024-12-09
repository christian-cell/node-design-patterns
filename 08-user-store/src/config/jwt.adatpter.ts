import jwt from 'jsonwebtoken';
import { envs } from './envs';

const JWT_SEED = envs.JWT_SEED;

export class JwtAdapter{

    /* 
    * si no va a ver dependency injection tenemos que trabajar con métodos estátios
    */

    static async generateToken ( payload:any, duration: string = '2' ) {
        
        return new Promise((resolve) => {

            jwt.sign(payload , JWT_SEED , {expiresIn: duration} , (err, token) => {

                if( err ) return resolve(null);

                resolve(token);
          
            })
        })
    }

    static validateToken ( token: string ){

        throw new Error('Not implemented');

        return;
    } 
}