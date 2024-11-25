import fs from 'fs';
import { yarg } from './config/plugins';
/* 
* vamos a tomar los valores por parámetros que el usuario ponga en el 
* comando
*/
/* podemos renombrar las variables en la desestructuración */
const { b:base , l:limit , s:showTable } = yarg || {};

// console.log('yarg : ' , yarg);

let outputMessage: string = `
=========================================
        Tabla del ${5}
=========================================\n
`;

for (let i = 1; i <= limit; i++) {

    outputMessage += `${i} x ${base} = ${(i * base)} \n`; 
}

if( showTable )console.log(outputMessage);

const outputPath = `ouputs/`;

fs.mkdirSync(outputPath , {recursive : true});

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);

// console.log('file created!');
