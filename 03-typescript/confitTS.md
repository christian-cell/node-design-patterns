como instalar y configurar TS en node

$ npm i -D typescript @types/node

todas las librerías necesitaran instalar sus @types.

Para iniciar el proyecto de TS , le indicamos que en dist/ va a transpilar el TS en JS
y el rootDir donde tiene que buscar ese código TS a transpilar

$ npx tsc --init --outDir dist/ --rootDir src

esto te crea el tsconfig.json con las configuraciones ya mencionadas en el comando anterior