en este caso no vamos a usar nodemon , vamos a usar una mas simple

Instalar TypeScript y demás dependencias

```
npm i -D typescript @types/node ts-node-dev rimraf
```

Inicializar el archivo de configuración de TypeScript ( Se puede configurar al gusto)
```
npx tsc --init --outDir dist/ --rootDir src
```

Crear scripts para dev, build y start 
```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```

DOTENV

para leer variables de entorno vamos a usar dot-env

$ npm i dotenv

to use dotent your .env needs to be created in the root of application ( same location of src )

Cuando se crea una nueva variable de entorno hay que parar el server y volver a levantarlo

$ npm run dev

tenemos que validar los datos como el email y demás que venga de las variables de entorno 
eso lo hacemos con env-var

$ npm i env-var

para el envío de correo tenemos que habilitar  lo siguiente

crear applicación y copiar la contraseña en la key MAILER_SECRET_KEY del .env

https://myaccount.google.com/u/0/apppasswords

