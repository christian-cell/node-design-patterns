"use strict";
//import { CreateContextOptions } from "vm";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTable = void 0;
class CreateTable {
    constructor(
    /*
    * DI - Dependency Injection
    */
    ) { }
    execute({ base, limit = 10 }) {
        let outputMessage = '';
        for (let i = 1; i <= limit; i++) {
            outputMessage += `${i} x ${base} = ${(i * base)} \n`;
        }
        return outputMessage;
    }
    ;
}
exports.CreateTable = CreateTable;
