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
Object.defineProperty(exports, "__esModule", { value: true });
const plugins_1 = require("./config/plugins");
const server_app_1 = require("./presentation/server-app");
/* console.log(process.argv);

const [ tsnode, app, ...args ] = process.argv ;

console.log(tsnode); */
/*
* funciones auto invocadas, en este caso para ejecutar funciones en el app.ts
*/
() => {
    // console.log('Ejecutado');
};
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
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield main();
    // console.log('yarg : ' , yarg);
}))();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('yarg:', plugins_1.yarg);
        const { b: base, l: limit, s: showTable, n: fileName, d: fileDestination } = plugins_1.yarg || {};
        server_app_1.ServerApp.run({ base, limit, showTable, fileName, fileDestination });
    });
}
;
