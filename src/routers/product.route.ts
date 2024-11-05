import { Router, Request, Response } from "express";
import ProductContoller from '../controllers/product.controller';

const productRoute = Router();
const productContoller = new ProductContoller();

productRoute.route("/").post((req: Request, res: Response) => {
    productContoller.addProduct(req, res);
});

productRoute.route("/").get((req: Request, res: Response) => {
    productContoller.fetchAllProduct(req, res);
});

export default productRoute;
