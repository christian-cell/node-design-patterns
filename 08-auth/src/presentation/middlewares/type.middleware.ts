import { NextFunction, Request, Response } from "express";

export class TypeMiddleware{

    private readonly validTypes:                                   string[] = ['users','products','categories'];



    public static validTypes ( validTypes: string[] ) {

        return ( req: Request, res: Response , next: NextFunction ) => {

            const type = req.url.split('/').at(2) ?? '';

            const validTypes = ['users', 'products', 'categories'];

            if( !validTypes.includes( type ) ){

                return res.status( 400 ).json({ error : `Invalid type : ${type}, validTypes : ${validTypes}` })
            }

            next()
        }
    }
}