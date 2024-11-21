Pasos para migrar un proyecto de JS en TS:

comentamos el código que hay en app.js

Creamos una nueva rama en git para la migración partiendo como base

1 en el proyecto instalamos

$ npm i -D typescript @types/node

$ npx tsc --init --outDir dist/ --rootDir src

instalamos nodemon

$ npm i -D ts-node nodemon

en el root de la aplicación ( al mismo nivel que el package.json ) creamos el nodemon.json y ponemos este contenido

```
    {
        "watch": ["src"],
        "ext": ".ts,.js",
        "ignore": [],
        "exec": "npx ts-node ./src/app.ts"
    }
```

en el package.json podemos poner cualquiera de estos 2 , tan solo debe haber uno llamado dev

```
  "dev": "nodemon"
  "dev": "npx nodemon" // En caso de no querer instalar nodemon
```

dejamos solo el de "dev": "nodemon" y el de test

instalamos en modo de dependencias de desarrollo con -D

$ npm i -D rimraf

creamos los siguientes scripts en el package.json

```

   "build": "rimraf ./dist && tsc",
   "start": "npm run build && node dist/app.js"

```

Una vez terminadas las configuraciones para TS

empezamos a cambiar las extensiones  de js a ts empezamos con el de app.js

nuevo console.log() en tu convertido a app.ts

```
console.log('Hola mundo con TS');
```