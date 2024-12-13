import { yarg } from "./config/plugins";
import { ServerApp } from "./presentation/server-app";


/* console.log(process.argv);

const [ tsnode, app, ...args ] = process.argv ;

console.log(tsnode); */




/* 
* funciones auto invocadas, en este caso para ejecutar funciones en el app.ts
*/

() => {
    // console.log('Ejecutado');
}

/* esta la metemos entre paréntesis y fuera la invocamos () */
(() => {
    // console.log('Ejecutado');
})();

/* podemos hacerela asincrona */
/* async function main () {
    console.log('Ejecutado');
};

( async () => {
    await main;
    console.log('fin del programa');
})(); */

( async () => {

    await main();

    // console.log('yarg : ' , yarg);
})();

async function main () {

    console.log('yarg:' , yarg);

    const { b:base , l:limit , s:showTable, n:fileName , d: fileDestination } = yarg || {};

    ServerApp.run({base, limit, showTable, fileName, fileDestination});
};



