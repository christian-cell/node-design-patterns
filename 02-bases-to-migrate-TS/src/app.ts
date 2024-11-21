//import {emailTemplate} from './js-foundation/01-template';
// const { getAge , getUUID } = require('./plugins'); 
import {emailTemplate} from './js-foundation/01-template';
//require('./js-foundation/02-destructuring');
const { getUserById } = require('./js-foundation/03-callbacks');
const { getUserByIdArrow } = require('./js-foundation/04-arrow'); 
const { buildMakePerson } = require('./js-foundation/05-factory');
const {getPokemonWithCallbackById , getPokemonByIdByAsyncAwait , getPokemonByIdWithoutCallback, getPokemonById } = require('./js-foundation/06-promises');
import { getAge, getUUID, buildLogger  } from './plugins';

const logger = buildLogger('app.js');

console.log('hola mundo con ts');