import { LogEntity, LogSeverityLevel } from "./log.entity";

describe('log.entity.ts' , () => {

    const dataObj = new LogEntity({

        message: 'Hola Mundo',
        level: LogSeverityLevel.high,
        origin: 'log.entity.test.ts'
    })

    test('should create a log entity instance' , () => {

        const log = new LogEntity( dataObj );

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObj.message );
        expect( log.level ).toBe( dataObj.level );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createdAt ).toBeInstanceOf( Date );
    });

    test('should create a log entity instance from Json', () => {


        const json = `{"message":"Service https://goas.com working","level":"low","createdAt":"2024-11-28T10:13:35.581Z","origin":"check-service.ts"}`;

        const log = LogEntity.fromJson( json );

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( log.message );
        expect( log.level ).toBe( LogSeverityLevel.low );
        expect( log.origin ).toBe( "check-service.ts" );
        expect( log.createdAt ).toBeInstanceOf( Date );
    })

    test('should crate a log entity instance from object' , () => {

        const log = new LogEntity( dataObj );

        expect( log ).toBeInstanceOf( LogEntity );
        expect( log.message ).toBe( dataObj.message );
        expect( log.level ).toBe( dataObj.level );
        expect( log.origin ).toBe( dataObj.origin );
        expect( log.createdAt ).toBeInstanceOf( Date );
    })
})