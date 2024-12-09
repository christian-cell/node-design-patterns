import { bcryptAdapter, JwtAdapter } from "../../config";
import { UserModel } from "../../data";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";

export class AuthService{

    constructor(){};

    /* 
    * no vamos a usar la arrow function porque no vamos a tener el puntero this
    * solo lo vamos a usar en los controladores
    */

    public async registerUser( registerUserDto : RegisterUserDto ) {

        const {  } = registerUserDto || {};
    
        const existUser = await UserModel.findOne({ email: registerUserDto.email });

        if( existUser ) throw CustomError.badRequest('Email already exists');

        try {
            
            const user = new UserModel( registerUserDto );

            user.password = bcryptAdapter.hash( registerUserDto.password );
            
            await user.save();
 
            const { password, ...userEntity } = UserEntity.fromObject(user);
  
            return { 

                user : {

                    ...userEntity, 
                    token: 'ABC' 
                }
            };

        } catch (error) {
            
            throw CustomError.internalServer(`${error}`);
        }        
    }

    public async loginUser( loginUserDto: LoginUserDto ){

        const userExists = await UserModel.findOne({ email: loginUserDto.email });

        if( !userExists )throw CustomError.badRequest(`user with email : ${loginUserDto.email} not found`);

        const passwordMatch = bcryptAdapter.compare( loginUserDto.password , userExists.password );

        if( !passwordMatch )throw CustomError.badRequest(`incorrect password`);

        const { password, ...userEntity } = UserEntity.fromObject( userExists );

        const token = await JwtAdapter.generateToken({ id: userExists.id , email : userExists.email });

        if(!token) throw CustomError.internalServer(`Error while creating jwt token`);

        return {

            user: userEntity,
            token: token
        }
    }
}