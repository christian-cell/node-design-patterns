// A A A arrange , act, assert

import { characteres } from "../../src/js-foundation/02-destructuring";

describe( 'js-foundation/02-destructuring.ts' , () => {

    it('characters should contain flash and batman' , () => {

        // 1 Arrange
        // console.log(characteres);

        // 2 Act
        // 3 Assert contain is caseSensitive
        expect(characteres).toContain('flash');
        expect(characteres).toContain('batman');
    })

    it('first character should be superman and second should be batman' , () => {

        // 1 Arrange
        const [superman, batman] = characteres;

        // 2 Act


        // 3 Assert contain is caseSensitive
        expect(superman).toBe('superman');
        expect(batman).toBe('batman');
    })
})