import axios from 'axios';

/* 
* con este patrón adaptador lo que estamos haciendo es que si el día de mañana tenemos
* que cambiar de fetch a axios solo lo tenemos que cambiar en este plugin y no en 
* todos los lados de la app
*/

export const httpClientPlugin = {

    get: async (url : string) => {


        const resp = await axios.get(url);

        const { data } = resp || {};

        return data;

        /* 
        * usamos axios en lugar de nuestro fetch
        */

        /* const resp = await fetch( url );
        return await resp.json(); */
    },

    post: async(url: string, body:any) => {

        throw new Error('Not implemented yet');
    }, 

    put: async(url: string, body:any) => {

        throw new Error('Not implemented yet');
    },

    delete: async(url: string ,body: any) => {
        
        throw new Error('Not implemented yet');
        
    }
        
              
};