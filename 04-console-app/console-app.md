para enviar argumentos a la hora de correr una aplicación de consola vamos a usar:

$ npm run build

para generar la carpeta dist y vamos a usar los siguientes --argumentos

--base , -l = limite ,--file=hora.text ,-s

$ npm dist/app.js --base 10 -l=100 --file=hola.txt -s

podemos crear un script de dev para pasar argumentos en el package.json

```
    "scripts": {
        "dev":"ts-node src/app.ts -b 10",
        "dev:nodemon": "nodemon",
        "build": "rimraf ./dist && tsc",
        "start": "npm run build && node dist/app.js"
    },
```

para manejar estas banderas tenemos un paquete yargs ( ver documentación de yargs )

$ npm i yargs
$ npm i --save-dev @types/yargs

para poder procesar estos argument values

creamos un plugin para utilizar yargs para que se mas fácil cambiarlo el día de mañana src/config/plugins

en el ejemplo vamos a usar el comando 
$ npx ts-node src/app.loginc.ts --base 7

para arrancar la app adicionalmente le podemos pasar todos los argumentos que aparecen en el args.plugin.ts



