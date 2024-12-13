"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const hero_service_1 = require("./services/hero.service");
const hero = (0, hero_service_1.findHeroeById)(3);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : 'Hero not found'); // si le pasamos un id 4 esto lanzará undefined , lanzamos un mensaje de no encontrado
