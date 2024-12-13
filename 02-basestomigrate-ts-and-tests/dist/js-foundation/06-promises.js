"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPokemonById = void 0;
const plugins_1 = require("../plugins");
/*
* esto de tener promesas anidadas es un problema
*/
const getPokemonById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const pokemon = yield plugins_1.httpClient.get(url);
        return pokemon.name;
    }
    catch (error) {
        throw `Pokemon not found with id : ${id}`;
    }
    /* fetch( url ).then( response => {

        response.json().then(( pokemon )=> {

            callback && callback( pokemon.name );
        })

    } , error => {

        console.log(error);
    }) */
});
exports.getPokemonById = getPokemonById;
/*
* lo antarior funciona pero es muy sucio, como solucionamos esto?
*/
const getPokemonWithCallbackById = (id, callback) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(url).then(response => response.json()).then(pokemon => {
        callback && callback(pokemon.name);
    });
};
/*
* lo anterior podría mejorar aún mas
*/
const getPokemonByIdWithoutCallback = (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    return fetch(url)
        .then((resp) => resp.json())
        // .then(() => { throw new Error(` pokemon with id : ${id} does not exists `) }) // esto es mejor manejarlo en la llamada de abajo
        .then((pokemon) => pokemon.name);
};
/*
* con async await
*/
const getPokemonByIdByAsyncAwait = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const pokemon = yield plugins_1.httpClient.get(url);
    return pokemon.name;
});
module.exports = {
    getPokemonById: exports.getPokemonById,
    getPokemonByIdWithoutCallback,
    getPokemonWithCallbackById,
    getPokemonByIdByAsyncAwait
};