import { Router } from 'express';
import { Authroutes } from './auth/routes';
import { Categoryroutes } from './categories/routes';
import { ProductsRoutes } from './products/routes';

export class AppRoutes {

  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    router.use( '/api/auth', Authroutes.routes );
    router.use( '/api/categories', Categoryroutes.routes );
    router.use( '/api/products', ProductsRoutes.routes );

    return router;
  }
}