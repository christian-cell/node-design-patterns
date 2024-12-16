import { Router } from 'express';
import { Authroutes } from './auth/routes';
import { Categoryroutes } from './categories/routes';
import { ProductsRoutes } from './products/routes';
import { FileUploadRoutes } from './file-upload/routes';
import { ImageRoutes } from './images/routes';
const swaggerUIPath= require("swagger-ui-express");
const swaggerjsonFilePath = require("../../docs/swagger");

export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use("/api-docs", swaggerUIPath.serve, swaggerUIPath.setup(swaggerjsonFilePath));
    router.use( '/api/auth', Authroutes.routes );
    router.use( '/api/categories', Categoryroutes.routes );
    router.use( '/api/products', ProductsRoutes.routes );
    router.use( '/api/upload', FileUploadRoutes.routes );
    router.use( '/api/images', ImageRoutes.routes );

    return router;
  }
}