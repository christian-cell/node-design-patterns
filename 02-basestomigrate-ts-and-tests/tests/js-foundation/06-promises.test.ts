
// A A A arrange , act, assert

import { getPokemonById } from "../../src/js-foundation/06-promises"

describe( 'js-foundation/05-promises.ts' , () => {

    it('should return a pokemon' , async () => {

        const pokemonId = 1;

        const pokemonName = await getPokemonById(pokemonId);

        expect(pokemonName).toBe('bulbasaur');
    })

    it('should return an error if pokemon does not exists' , async () => {

        const pokemonId = 10000000;

        try {

            await getPokemonById(pokemonId);

            expect(true).toBeFalsy();

        } catch (error) {
            
            expect( error ).toBe(`Pokemon not found with id : ${pokemonId}`);
        }
    })
})