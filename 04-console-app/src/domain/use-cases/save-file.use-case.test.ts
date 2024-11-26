import { SaveFile } from "./save-file.use-case";
import fs from 'fs';

describe('src/domain/save-file.use-case.ts', () => {

    /* 
    * si el archivo ya existe en esta ruta no podemos probar que se crea
    * entonces usamos los ciclos de vida del test antes de cada uno
    * despues de cada afterEach()
    * borramos la carpeta outputs
    */

    const customOptions = {
            
        fileName:'custom-table-name',
        fileContent:'custom content',
        fileDescription:'custom-outputs',
        fileDestination:'custom-table-name'
    }

    const customFilePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`;

    beforeEach(() => {

        jest.clearAllMocks();
    })

    afterEach(() => {

        const outputFolderExists = fs.existsSync('outputs');
        if( outputFolderExists ) fs.rmSync('outputs', {recursive: true});

        const customOutputFolderExists = fs.existsSync(customOptions.fileDestination);
        if(customOutputFolderExists) fs.rmSync(customOptions.fileDestination , {recursive:true});
    })

    test('should save file with default values' , () =>{

        const saveFile = new SaveFile();

        const options = {

            fileContent: 'test content'
        }

        const result = saveFile.execute(options);
        const filePath = `outputs/table.txt`;

        /*
        * puede dar un falso positivo ya que puede ser la primera segunda vez y este archivo ya existe
        */

        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath , {encoding: 'utf-8'});

        expect(result).toBe( true );
        expect( fileExists ).toBe( true );
        expect( fileContent ).toBe( options.fileContent );
    })

    test('should save files with custom values', () => {

        const saveFile = new SaveFile();
        const result = saveFile.execute(customOptions);
        const fileExists = fs.existsSync(customFilePath)
        const fileContent = fs.readFileSync(customFilePath , {encoding: 'utf-8'});

        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        // expect(fileContent).toBe(customOptions.fileContent);
    })

    test('should return false if directory could not be created' , () => {

        /*
        * vamos a mockear con spyon la creación de un directorio con permisos para que de error
        * la creación del archivo en este 
        * OJO siempre que hacemos un mockImplementation después del test tenemos que usar el
        * mockRestore
        */

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs , 'mkdirSync').mockImplementation(() => {

            throw new Error('this is a custom error message from testing');
        });

        const result = saveFile.execute(customOptions);

        expect(result).toBe( false );

        mkdirSpy.mockRestore();
    })

    test('should return false if file could not be created' , () => {

        /*
        * vamos a mockear con spyon la creación de un directorio con permisos para que de error
        * la creación del archivo en este
        * OJO siempre que hacemos un mockImplementation después del test tenemos que usar el
        * mockRestore
        */

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs , 'mkdirSync').mockImplementation(() => {

            throw new Error('this is a custom error message from testing file creation');
        });

        const result = saveFile.execute({fileContent : 'Hola'});

        expect(result).toBe( false );

        writeFileSpy.mockRestore();
    })
})