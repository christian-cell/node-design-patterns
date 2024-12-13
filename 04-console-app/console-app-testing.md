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

7 al incluir estas líneas ( necesarias en el tsconfig.json ) vamos a ver errores ya que los tests se excluyen del build
de momento no lo hagamos, solo justo antes de hacer el 

$ npm run build

añadimos en la primera línea en nuestro tsconfig.json
```
"include": ["src/**/*"],
"exclude": ["node_modules", "**/*.spec.ts","**/*.test.ts"],
```

Para poder ejecutar los tests de un solo archivo , en la terminal podemos pulsar la tecla W de watch y con la tecla p usar una expresion regex , escribimos el nombre del archivo y solo ejecutará las pruebas de dicho archivo