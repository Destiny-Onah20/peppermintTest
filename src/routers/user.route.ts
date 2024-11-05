import { Router, Request, Response } from "express";
import UserController from "../controllers/user.controller";

const userRoute = Router();
const userController = new UserController();

userRoute.route("/auths").post((req: Request, res: Response) => {
    userController.userRegistration(req, res);
});

userRoute.route("/").get((req: Request, res: Response) => {
    userController.fetchUser(req, res);
});

export default userRoute;
