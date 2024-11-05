import { Router, Request, Response } from "express";
import userRoute from "./user.route";
import productRoute from "./product.route";


const routes = (): Router => {
    const router = Router();
  
    router.get('/', (_req: Request, res: Response) => {
      res.send('Welcome to Peppermint test.');
    });

    router.use("/users", userRoute);
    router.use("/products", productRoute)

    router.all("*", (req: Request, res: Response) => {
        res.status(404).json({
          message: `This Route ${req.originalUrl} does not exist on this Server`
        })
      });

  return router;
}

export default routes;
