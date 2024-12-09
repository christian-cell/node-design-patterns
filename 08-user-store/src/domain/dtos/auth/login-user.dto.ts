import { regularExps } from "../../../config";

export class LoginUserDto {

    constructor(

        public email:                                 string,
        public password:                              string
    ){

        this.email = email;
        this.password = password;
    }

    public static create ( object : {[key:string] :any} ): [string?, LoginUserDto?] {

        const { name, email, password } = object || {};

        if( !email )return ['Missing email', undefined];
        if( !regularExps.email.test( email ) ) return ['email is not value'];
        if( !password ) return ['Missing password'];
        if( password.length < 6 ) return ['Password to short'];

        return [ undefined, new LoginUserDto( email, password ) ];
    }
}