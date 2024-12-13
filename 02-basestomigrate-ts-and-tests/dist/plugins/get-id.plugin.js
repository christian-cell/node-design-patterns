"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUUID = void 0;
const uuid_1 = require("uuid");
/*
* cuando tenemos este error : getUUID implicitly has return type
 because it does not have a return type annotation and is referenced directly or indirectly in one of its return expressions.
* esto es debido a que esta librería no está escrita en TS esto esta escrito en JS
* hay que instalar los types de esta librería en concreto los tipos siempre tienen que ser con --save-dev
*/
const getUUID = () => (0, uuid_1.v4)();
exports.getUUID = getUUID;
