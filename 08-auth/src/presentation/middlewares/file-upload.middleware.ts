import { NextFunction, Request, Response } from "express";

export class FileUploadMiddleware{

    public static containFiles( req: Request, res: Response, next: NextFunction ){

        const { files , params : { type } } = req || {};

        if( !files || Object.keys( files ).length === 0 ){
        
            return res.status( 400 ).json({ error : 'No files were selected' });
        }

        if( !Array.isArray( files.file ) ){

            req.body.files = [ files.file ];
        }
        else 
        {
            req.body.files = files.file;
        }

        next();
    }
}