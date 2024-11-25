"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const base = 5;
let outputMessage = `
=========================================
        Tabla del ${5}
=========================================\n
`;
for (let i = 1; i <= 10; i++) {
    outputMessage += `${i} x ${base} = ${(i * base)} \n`;
}
// const outputPath = `ouputs/folder1/folder2/folder3`;
const outputPath = `ouputs/`;
//if not exists outputPath create it recursively
fs_1.default.mkdirSync(outputPath, { recursive: true });
fs_1.default.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('file created!');
