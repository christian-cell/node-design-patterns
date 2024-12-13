const { http } = require('../plugins');

/* 
* esto de tener promesas anidadas es un problema
*/

const getPokemonById = ( id , callback ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch( url ).then( response => {

        response.json().then(( pokemon )=> {

            callback && callback( pokemon.name );
        })

    } , error => {

        console.log(error);
    })
}


/* 
* lo antarior funciona pero es muy sucio, como solucionamos esto?
*/

const getPokemonWithCallbackById = ( id , callback ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    fetch( url ).then( response => response.json() ).then( pokemon => {

        callback && callback(pokemon.name);
    })
} 


/* 
* lo anterior podría mejorar aún mas
*/
 
const getPokemonByIdWithoutCallback = ( id ) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    return fetch( url )
        .then(( resp ) => resp.json())
        // .then(() => { throw new Error(` pokemon with id : ${id} does not exists `) }) // esto es mejor manejarlo en la llamada de abajo
        .then(( pokemon ) => pokemon.name);
} 

/* 
* con async await
*/

const getPokemonByIdByAsyncAwait = async (id) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemon = await http.get(url);

    return pokemon.name;
}


module.exports = {
    getPokemonById,
    getPokemonByIdWithoutCallback,
    getPokemonWithCallbackById,
    getPokemonByIdByAsyncAwait
}