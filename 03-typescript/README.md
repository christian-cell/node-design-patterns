para levantar el package.json por defecto sin preguntas

$ npm init -y

si no tenemos instalado nodemon tambien podemos correrlo con npx

$ npx nodemon src/app.js

podemos arrancar el proyecto

$ npx tsc

o si lo queremos en modo hot reload

$ npx tsc --watch

veremos que en la carpeta dist empieza a transpilar el ts en js

y en otra terminal podemos correr nodemon con el apuntando al js de dist

$ npx nodemon dist/app

pero hay otra forma mas fácil para hacerlo con un comando, vamos al package.json a crear nuestros scripts

instalamos ts-node en dependencias de desarrollo con -D

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

por último queda la construcción del proyecto

instalamos en modo de dependencias de desarrollo con -D

$ npm i -D rimraf

creamos los siguientes scripts en el package.json

```

   "build": "rimraf ./dist && tsc",
   "start": "npm run build && node dist/app.js"

```

corremos el 

$ npm run build

estos scripts van a eliminar el dist de desarrollo y va a generar de nuevo el dist para prod

esto en next ya viene configurado pero hemos aprendido a hacerlo por nosotros mismos