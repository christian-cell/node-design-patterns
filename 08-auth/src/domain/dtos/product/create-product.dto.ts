import { Validators } from "../../../config";

export class CreateProductDto{

    private constructor(

        public readonly name :                           string,
        public readonly available :                      boolean,
        public readonly price :                          number,
        public readonly description :                    string,
        public readonly user :                           string, //userId
        public readonly category:                        string //category Id

    ){}

    public static create( props: {[key:string]:any} ):[string? , CreateProductDto?]{

        const {
            name,
            available,
            price,
            description,
            user,
            category
        } = props;

        console.log('category : ' , category);

        if(!name) return ['Missing name'];
        if(!user) return ['Missing user'];
        if(!category) return['Missing category'];
        if( !Validators.isMongoId(category) ) return['Invalid category Id'];
        if( !Validators.isMongoId( user ) ) return['Invalid user Id']; 

        return [ undefined, new CreateProductDto(

            name,   
            !!available, //si viene un valor string true , si viene falso esto será falso
            price,
            description,
            user,   
            category
        )]
    }
}