import { Router } from "express";
import { ImageController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class ImageRoutes{

    public static get routes():Router{

        const router = Router();

        const controller = new ImageController();

        router.get('/:type/:img', [ AuthMiddleware.validateJWT ] , controller.getImage );

        return router;
    }
}