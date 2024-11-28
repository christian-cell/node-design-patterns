
import yargs from 'yargs';

    /* 
    * en el caso de querer probar alguna opción debemos pasarle el argumento de esta manera,
    * npx ts-node src/app --base -10 -s 
    * npx ts-node src/app --base -10 -l
    * con check podemos poner condiciones para limitar los argumentos que envíen
    */

    export const yarg = yargs(process.argv)
    .option('b' , {
        
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Multiplation table base'
    })
    .option('l',{
        alias:'limit',
        type: 'number',
        default: 10,
        describe: 'Multiplation table base' 
    })
    .option('s', {
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'Show multiplication table'
    })
    .option('n', {
        alias: 'name',
        type: 'string',
        default: 'multiplication-table',
        describe: 'File name'
    })
    .option('d', {
        alias: 'destination',
        type: 'string',
        default: 'outputs',
        describe: 'File name'
    })
    .check(( argv , options ) => {

        /* ('argv : ' , argv);
        console.log('options :' , options); */

        if( argv.b < 1 ) throw new Error('Error base must be a valid number');

        return true;
    })
    .parseSync();