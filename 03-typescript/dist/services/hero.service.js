"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findHeroeById = void 0;
const heros_1 = require("../data/heros");
const findHeroeById = (id) => {
    return heros_1.heroes.find((hero) => hero.id === id);
};
exports.findHeroeById = findHeroeById;
