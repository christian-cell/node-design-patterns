import { emailTemplate } from "../../src/js-foundation/01-template"

// A A A arrange , act, assert

describe( 'js-foundation/01-template.ts' , () => {

    it('template should contains a greeting and comma' , () => {

        // 1 Arrange

        

        // 2 Act
        

        // 3 Assert //contains a substr
        expect( emailTemplate ).toContain('Hi, ')
    })

    it('emailTemplate should contains {{name}} and {{orderId}}' , () => {

        // 1 Arrange

        

        // 2 Act
        

        // 3 Assert for regular expression toMatch
        expect( emailTemplate ).toMatch(/{{name}}/);
        expect( emailTemplate ).toMatch(/{{orderId}}/);
    })
})

