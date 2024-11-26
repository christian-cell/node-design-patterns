import { CreateTable } from "./create-table.use-case";

describe('testing config/domain/create-table.use-case.ts', () => {

    const createTable = new CreateTable();

    test('should create table with default values', ()=> {

        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n').length;

        expect(createTable).toBeInstanceOf( CreateTable );
        expect(table).toContain('1 x 2 = 2');
        expect(rows).toBe(10);
    });

    test('should create table with custom values' , () => {

        const options = {
            
            base : 3,
            limit : 20
        }

        const table = createTable.execute(options);
        const rows = table.split('\n').length;

        expect(table).toContain('1 x 3 = 3');
        expect(table).toContain('10 x 3 = 30');
        expect(table).toContain('20 x 3 = 60');
        expect(rows).toBe( options.limit );
    })
})