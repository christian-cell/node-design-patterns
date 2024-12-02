1 Typescript y depedencias

```
npm i -D typescript @types/node ts-node-dev rimraf
```

2 Inicializar archivo de configuración de Typescript

```
npx tsc --init --outDir dist/ --rootDir src
```

3 Crear Scripts en el package.json

```
"dev": "tsnd --respawn --clear src/app.ts",
"build": "rimraf ./dist && tsc",
"start": "npm run build && node dist/app.js"
```