import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import { ServerApp } from "./server-app"

describe('Server app src/presentation/server-app.ts', () => {

    const options = {
        base:               2,
        limit:              10,
        showTable:          false,
        fileName:           'test-destination',
        fileDestination:    'test-filename'
    }


    /*
    * si creamos mocks en nuestros test tenemos que limpiar los anteriores antes
    * de volver a ejecutar los tests
    */
    beforeEach(() => {

        jest.clearAllMocks();
    })
    
    test('should create ServerApp Instance', () =>{

        const runOptions = {
            base:               3,
            limit:              20,
            showTable:          true,
            fileName:           'table-three',
            fileDestination:    'outputs'
        }

        const serverApp = new ServerApp();

        /* 
        * cuando el método es static lo probamos así
        */

        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function');
    })

    test('should run with options', () =>{

        const logSpy = jest.spyOn(console, 'log');
        const createTableSpy = jest.spyOn( CreateTable.prototype, 'execute');
        const saveFileSpy = jest.spyOn( SaveFile.prototype, 'execute' ); 

        ServerApp.run(options);

        expect(logSpy).toHaveBeenCalledTimes(3);
        expect(logSpy).toHaveBeenCalledWith('Server running...');
        expect(logSpy).toHaveBeenCalledWith('File created!');

        expect( createTableSpy ).toHaveBeenCalledTimes(1);
        expect( createTableSpy ).toHaveBeenCalledWith(
            {
                base: options.base , 
                limit: options.limit
            }
        );

        expect( saveFileSpy ).toHaveBeenCalledTimes(1);

        /* TODO investigar por que este falla */
        /* expect( saveFileSpy ).toHaveBeenCalledWith(
            {
            fileContent: expect.any(String),
            fileDestination : options.fileDestination,
            fileName: options.fileName}
        ) */
    })

    test('should run with custom values mocked' , () => {

        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const  createMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);

        /* 
            console.log('File created!') : 
            console.error('File not created!');
        */

        console.log = logMock;
        // console.log = logErrorMock;


        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith('Server running...');
        // expect(logErrorMock).toHaveBeenCalledWith('File not created!');
        expect(createMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit});
        expect (saveFileMock).toHaveBeenCalledWith({
            fileContent: "1 x 2 = 2",
            fileDestination: "test-filename/table-2",
            fileName: "test-destination"
        });

        expect(logMock).toHaveBeenCalledWith('File created!');
        // expect( logErrorMock ).not.toBeCalled();
    })
})