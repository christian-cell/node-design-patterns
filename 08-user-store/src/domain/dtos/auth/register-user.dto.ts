import { regularExps } from "../../../config";

export class RegisterUserDto {

    constructor(

        public name:                                  string,
        public email:                                 string,
        public password:                              string
    ){

        this.email = email;
        this.name = name;
        this.password = password;
    }

    public static create ( object : {[key:string] :any} ): [string?, RegisterUserDto?] {

        const { name, email, password } = object || {};

        if( !name )return ['Missing name', undefined];
        if( !email )return ['Missing email', undefined];
        if( !regularExps.email.test( email ) ) return ['email is not value'];
        if( !password ) return ['Missing password'];
        if( password.length < 6 ) return ['Password to short'];

        return [ undefined, new RegisterUserDto(name, email, password) ];
    }
}