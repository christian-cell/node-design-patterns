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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
/*
* con este patrón adaptador lo que estamos haciendo es que si el día de mañana tenemos
* que cambiar de fetch a axios solo lo tenemos que cambiar en este plugin y no en
* todos los lados de la app
*/
exports.httpClientPlugin = {
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield axios_1.default.get(url);
        const { data } = resp || {};
        return data;
        /*
        * usamos axios en lugar de nuestro fetch
        */
        /* const resp = await fetch( url );
        return await resp.json(); */
    }),
    post: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented yet');
    }),
    put: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented yet');
    }),
    delete: (url, body) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error('Not implemented yet');
    })
};
