/* 
* una factory function es una function que crea una function
*/

// para no estar dependiendo de las dependencias de plugins en lugar de hacer el require , le pasamos a la factory function
// como argumentos los plugins que va a usar para esta factory function, la siguiente línea irá en el archivo donde invoquemo
// esta function en este caso el app.js
// const { getAge , getUUID } = require('../plugins'); 

const buildMakePerson = ({ getUUID, getAge }) =>{

    return ( { name , birthday } ) => {

        return {
            id: getUUID(),
            name : name,
            birthday: birthday,
            age : getAge(birthday)
        }
    }

}

module.exports = {

    buildMakePerson
}