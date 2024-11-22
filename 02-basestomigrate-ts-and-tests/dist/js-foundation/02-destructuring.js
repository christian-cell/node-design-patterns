"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.characteres = void 0;
const { SHELL, HOMEBREW_PREFIX } = process.env || {};
// console.table({ SHELL , HOMEBREW_PREFIX });
exports.characteres = ['superman', 'batman', 'Green Lantern', 'flash'];
const [_, __, flash] = exports.characteres;
const [, batman,] = exports.characteres;
