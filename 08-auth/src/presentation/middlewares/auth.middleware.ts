import { NextFunction, Request, Response } from "express";
import { JwtAdapter } from "../../config";
import { UserModel } from "../../data";
import { UserEntity } from "../../domain";
                               
export abstract class AuthMiddleware{
                                          
                 
    static async validateJWT ( req: Request, res: Response, next: NextFunction ) {

        /* 
        *Authorization: Bearer
        */

        const authorization = req.header('Authorization');

        if( !authorization ) return res.status(401).json({ error : 'No token provided' });

        if( !authorization.startsWith('Bearer ') ) return res.json(401).json({ error: 'Invalidad Bearer token' });

        const token = authorization.split(' ').at(1) || '';

        try {

            const payload = await JwtAdapter.validateToken<{ id: string }>(token);

            if( !payload ) return res.status(401).json({ error: 'Invalid token' });
            
            const user = await UserModel.findById( payload.id );

            if( !user )return res.status(400).json({ error : 'Invalid token - user' });

            req.body.user = UserEntity.fromObject(user);

            /* 
            * TODO: validar si el usuario es activo
            */

            /* 
            * indica que el flujo proceda con otro middleware o con otro controlador de la ruta
            */
            next();

        } catch (error) {
            
            res.status(500).json({ error : `Internal server error ${error}` });
        }
    }
}                                              