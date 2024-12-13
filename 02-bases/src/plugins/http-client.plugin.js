const axios = require('axios');

/* 
* con este patrón adaptador lo que estamos haciendo es que si el día de mañana tenemos
* que cambiar de fetch a axios solo lo tenemos que cambiar en este plugin y no en 
* todos los lados de la app
*/

const httpClientPlugin = {

    get: async (url) => {


        const resp = await axios.get(url);

        const { data } = resp || {};

        return data;

        /* 
        * usamos axios en lugar de nuestro fetch
        */

        /* const resp = await fetch( url );
        return await resp.json(); */
    },

    post: async(url, body) => {},
    put: async(url, body) => {},
    delete: async(url, body) => {},
};

module.exports = {

    http: httpClientPlugin
}