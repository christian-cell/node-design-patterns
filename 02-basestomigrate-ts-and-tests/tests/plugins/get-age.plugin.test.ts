
// A A A arrange , act, assert

import { getAge } from "../../src/plugins"

describe( 'plugins/get-age.plugin.ts' , () => {

    it('getAge() should return the type of age as number' , () => {


        const birthdate = '1989-08-25';
        const age = getAge(birthdate);

        expect(typeof(age)).toBe('number');
    })

    it('getAge() should return the age of the person' , () => {


        const birthdate = '1989-08-25';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        // Assert
        expect(age).toBe(calculatedAge);
    })

    //SpyOn
    it('getAge() should return 0 years' , () => {

        /* 
        * el objectivo es poner un espía en el el getAge
        */

       const spy = jest.spyOn( Date.prototype , 'getFullYear' ).mockReturnValue(1989);

       const birthdate = '1989-08-25';

       const age = getAge(birthdate);

       //    console.log(spy);

       expect( age ).toBe(0);

       expect( spy ).toHaveBeenCalled();
       expect( spy ).toHaveBeenCalledWith();
    })
})

