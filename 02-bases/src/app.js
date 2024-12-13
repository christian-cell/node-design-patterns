//import {emailTemplate} from './js-foundation/01-template';
// const { getAge , getUUID } = require('./plugins'); 
const emailTemplate = require('./js-foundation/01-template');
require('./js-foundation/02-destructuring');
const { getUserById } = require('./js-foundation/03-callbacks');
const { getUserByIdArrow } = require('./js-foundation/04-arrow'); 
const { buildMakePerson } = require('./js-foundation/05-factory');
const {getPokemonWithCallbackById , getPokemonByIdByAsyncAwait , getPokemonByIdWithoutCallback, getPokemonById } = require('./js-foundation/06-promises');
const { getAge, getUUID, buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

/* logger.log('Hola mundo');
logger.error('algo malo') */


const pokemonNameByid = getPokemonById(2 , (pokemon) => {

    // console.log(pokemon);
});

/* const name = getPokemonWithCallbackById(2 , (pokemon) => {

    console.log(pokemon)
});  */

// console.log(name)

/* const nameByAsync = getPokemonByIdByAsyncAwait(4)
    .then((pokemon) => console.log({ pokemon }))
    .catch((err) => console.log(`por favor intente con otro pokemon , error : ${err}`))
    .finally(()=> console.log('finalmente')) */

/* getPokemonByIdWithoutCallback(6)
    .then(( pokemon ) => console.log({pokemon}))
    .catch(( error ) => console.log('please try other pokemon'))
    .finally(() => console.log('finalmente')) 
*/

/* 
* call factory function
* las dependencias se mandan como parámetros a la factory function y se requieren 
* aquí en el archivo donde se invoca
*/

const makePerson = buildMakePerson({ getUUID , getAge });

const obj = {
    id : 1,
    name: 'Jhon Doe',
    birthday : '1989-08-25'
}

const john = makePerson( obj );



const id = 1;

getUserByIdArrow( id, ( error, user ) => {

    if( error ) throw new Error(error);

})

/* 
* el código siguiente se podría hacer pero hay que evitarlo
*/

getUserById( id, function( error, user ){

    if( error ){

        throw new Error(error);
    }

    getUserById( 2, function( error, user2 ){

        if( error ){
    
            throw new Error(error);
        }
    
    })
}) 