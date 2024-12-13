export class CreateCategoryDto {

    private constructor(

        public name: string,
        public available: boolean
    ) {}

    static create( object: { [key:string]:any } ): [string?, CreateCategoryDto?] {

        const { name, available } = object;

        let availableBoolean = available;

        if ( !name ) return ['Missing category name'];

        if ( typeof( available ) !== 'boolean' ){

            availableBoolean = ( available === 'true' )
        } /* return ['Missing available']; */

        return [undefined, new CreateCategoryDto(name, availableBoolean)];
    }
}