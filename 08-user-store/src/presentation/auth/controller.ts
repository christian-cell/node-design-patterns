import { Request, Response } from "express";
import { CustomError, LoginUserDto, RegisterUserDto } from "../../domain";
import { AuthService } from "../services/auth.service";

export class AuthController{

    constructor(

        public readonly authService:                               AuthService
    ){}

    private handleError = (error: unknown, res: Response) => {

        if( error instanceof CustomError ){

            return res.status( error.statusCode ).json({ error : error.message });
        }

        return res.status( 500 ).json({ error : `Internar server error : ${error}` });
    }

    public registerUser = ( req: Request , res: Response ) => {

        const [error , registerUserDto] = RegisterUserDto.create( req.body );

        if( error ) res.status(400).json({error});

        this.authService.registerUser( registerUserDto! )
            .then( ( user ) => res.json(user) )
            .catch( error => this.handleError( error, res ) );
    }

    public loginUser = ( req: Request , res: Response ) => {

        const [error , loginUserDto] = LoginUserDto.create( req.body );

        if( error ) res.status(400).json({error});

        this.authService.loginUser( loginUserDto! )
            .then( (user) => res.json( user ) )
            .catch( error =>  this.handleError( error, res ));
    }

    public validateEmail = ( req: Request , res: Response ) => {

        res.json('validateEmail')
    }
}