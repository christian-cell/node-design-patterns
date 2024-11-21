// A A A arrange , act, assert

import { getUserById } from "../../src/js-foundation/03-callbacks";

describe( 'js-foundation/03-callbacks.ts' , () => {

    it('getUserById should return an error if user does not exist' , (done) => {

        //arrange
        const id = 10;

        //act

        //assert

        /* 
        * the expect should be in the call back to wait it resolve
        * and we use done to realize when it finihs
        */

        getUserById(id, ( err, user )=>{

            expect( err ).toBe(`User not found with id ${id}`);
            expect( user ).toBeUndefined();

            // throw new Error('Not implemented yet');

            done();
        });
    })

    it('getUserById should expected id and name, error as undefined' , (done) => {

        //arrange
        const id = 1;

        //act

        //assert

        /* 
        * the expect should be in the call back to wait it resolve
        * and we use done to realize when it finihs
        */

        getUserById(id, ( err, user )=>{

            expect( user?.id ).toBe(1);

            expect( user?.name ).toBe('Jhon Doe');

            expect(user).toEqual({
                id : 1,
                name: 'Jhon Doe'
            })
            
            expect( err ).toBeUndefined();

            done();
        });
    })
})