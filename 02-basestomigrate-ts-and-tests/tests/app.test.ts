// A A A arrange , act, assert

describe( 'App' , () => {

    it('Should be 30' , () => {

        // 1 Arrange
        const number1 = 10;
        const number2 = 20;

        // 2 Act
        const result = number1 + number2;

        // 3 Assert
        expect(result).toBe(30);
    })
})