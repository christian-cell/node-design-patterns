"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const plugins_1 = require("./config/plugins");
/*
* vamos a tomar los valores por parámetros que el usuario ponga en el
* comando
*/
/* podemos renombrar las variables en la desestructuración */
const { b: base, l: limit, s: showTable } = plugins_1.yarg || {};
// console.log('yarg : ' , yarg);
let outputMessage = `
=========================================
        Tabla del ${5}
=========================================\n
`;
for (let i = 1; i <= limit; i++) {
    outputMessage += `${i} x ${base} = ${(i * base)} \n`;
}
if (showTable)
    console.log(outputMessage);
const outputPath = `ouputs/`;
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
// console.log('file created!');
