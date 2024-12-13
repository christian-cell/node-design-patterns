import { buildMakePerson , BuildMakePersonOptions } from "../../src/js-foundation/05-factory";

// A A A arrange , act, assert

describe( 'js-foundation/04-factory.ts' , () => {

    const getUUID = () =>'1234';
    const getAge = () => 35

    it('should return a function' , () => {

        /* 
        * this test is if someone forget return word in the factory
        */

        const makePerson = buildMakePerson({ getUUID ,  getAge });

        expect(typeof makePerson).toBe('function');
    })

    it('makePerson should return a person' , () => {

        const makePerson = buildMakePerson({ getUUID ,  getAge });

        const jhonDoe = makePerson({name: 'john Doe', birthdate: '1989-08-25'});

        expect(jhonDoe).toEqual(
            { 
                id: '1234', 
                name: 'john Doe',
                birthday: '1989-08-25', 
                age: 35 
            }
        )
    })
})