Vamos a configurar el ambiente de las pruebas: 

Jest , Mocha, Jasmine

en este caso vamos a usar Jest ya que Jasmine lo conocemos de angular

1 instalamos jest y sus tipos y superstest para restfull API's

$ npm install -D jest @types/jest ts-jest supertest

2 creamos el archivo de configuración de los tests con este comando y respondemos las preguntas

$ npx jest --init

3 genera un jest.config.ts

buscamos la key preset y la configuramos de la siguiente manera

```
preset: 'ts-jest',
```

4 Buscamos la key testEnvironment y la configuramos de la siguiente manera
```
testEnvironment: "jest-environment-node",
```

5 para usar el archivo .env.test en los testscreamos en la raiz del proyecto a la altura del src un archivo
```
setupTest.ts
```

con este contenido
```
import { config } from 'dotenv';

config({

    path: '.env.test'
})
```

y lo llamamos en el jest.config.js
```
// The paths to modules that run some code to configure or set up the testing setupFiles: [

    "<rootDir>/setupTests.ts"
  ],
```

manos a la obra la recomandación para hacer los tests es empezar por lo que menos dependencias tiene
hacia lo que mas dependencias tiene