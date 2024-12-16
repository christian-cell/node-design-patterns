import { Request, Response } from "express";
import { CustomError } from "../../domain";
import { FileUploadService } from "../services/file-upload.service";
import { UploadedFile } from "express-fileupload";

export class FileUploadController {


  // DI
  constructor(

    private readonly fileUploadService:                          FileUploadService 
  ) {}

  private handleError = (error: unknown, res: Response ) => {

    if ( error instanceof CustomError ) {

      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(`${ error }`);

    return res.status(500).json({ error: 'Internal server error' })
  } 

  public uploadFile = async ( req: Request , res:Response ) =>  {

    const { params : { type } , body : { files } } = req || {};

    const file = files.at(0) as UploadedFile;

    this.fileUploadService.uploadSingle( file , `uploads/${ type }` )
      .then( uploaded => res.json( uploaded ) )
      .catch( error => this.handleError( error , res ) );
  }

  public uploadMultipleFiles = async ( req: Request , res:Response ) =>  {

    const { params : { type } , body : { files } } = req || {};

    const myFiles = files as UploadedFile[];

    this.fileUploadService.uploadMultiple( myFiles , `uploads/${ type }` )
      .then( uploaded => res.json( uploaded ) )
      .catch( error => this.handleError( error , res ) );
  }
}