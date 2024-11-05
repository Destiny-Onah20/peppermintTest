import { Router, Request, Response } from "express";
import UserController from "../controllers/user.controller";

const userRoute = Router();
const userController = new UserController();

userRoute.route("/auths").post((req: Request, res: Response) => {
    userController.userRegistration(req, res);
});

export default userRoute;
