# 02 Base de Node
run 

$ npm run dev

Para depurar ponemos breakpoint y en el package.json le damos al icono de play en el depurador, seleccionamos el script para arrancar y listo.

Vamos a crear el patrón adaptador en plugins , en lugar de usar librerías de terceros en nuestro código 
```

const BuildPerson = ( { name , birthday } ) => {

    return {
        id: uuidv4(),
        name : name,
        birthday: birthday,
        age : getAge(birthday)
    }
}

```

esto supone que si queremos empezar a usar otra librería que no sea uuid , tenemos que cambiar esta referencia en todos los lugares donde la estemos usando.
Lo que vamos hacer es crear una carpeta plugins con un get-age.plugin.js con este código

```
const getAgePlugin = require('get-age');;

const getAge = ( birthday ) => {

    if( !birthday )return new Error('birthday is required');

    return getAgePlugin(birthday);
}

module.exports = {
    
    getAge
}
```

y lo vamos a llamar en 05-factory.js

```
const { v4: uuidv4} = require('uuid');
const { getAge } = require('../plugins/get-age.plugin');

const obj = {
    id : 1,
    name: 'Jhon Doe',
    birthday : '1989-08-25'
}

const BuildPerson = ( { name , birthday } ) => {

    return {
        id: uuidv4(),
        name : name,
        birthday: birthday,
        age : getAge(birthday)
    }
}

const jhon = BuildPerson(obj);

console.log(jhon);

module.exports = {
    BuildPerson
}
```

hacemos lo mismo para el GUUID
