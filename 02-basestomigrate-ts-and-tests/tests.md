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

5 Pasos opcionales
```
// Opcional - The paths to modules that run some code to configure or set up the testing environment before each test
// setupFiles: ['dotenv/config'],
```

6 reemplazamos el script test por estos scripts en el package.json
```
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
```

7 creamos a la altura del package.json una carpeta tests y dentro un archivo app.test.ts con este contenido
nota que es bien parecido a la suit de test del spec.ts de angular
```
describe( 'App' , () => {

    it('should be true' , () => {

        expect(true).toBe(true);
    })
})
```

8 ejecutamos a la altura del jest.config.ts

$ npm run test 
$ npm run test:watch #para el test con hotreload

veremos los resultados de las pruebas

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |                   
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.238 s
```

tambien podemos correr para que nos muestre la cobertura de nuestros tests

$ npm run test:coverage

esto genera una carpeta coverage dentro hay un .html que podemos ver en el navegador

vamos a previnir en caso de que haya un fallo en el test, que se corra este script del package.json
```
"build": "rimraf ./dist && tsc",
```
añadimos en la primera línea en nuestro tsconfig.json
```
"include": ["src/**/*"],
"exclude": ["node_modules", "**/*.spec.ts","**/*.test.ts"],
```

instalamos rimraf

$ npm i --save-dev rimraf

modificamos los siguientes scripts en el package.json
```
    "build": "npm run test && rimraf ./dist && tsc",
    "start": "node dist/app.js"
```