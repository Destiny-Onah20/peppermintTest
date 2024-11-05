import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { validateUserData } from "../helpers/user.validator";
import User from "../models/user.model";
class UserController {
    async userRegistration(req: Request, res: Response){
        try {
            const { name, email, password } = req.body;
            const requestBody = {
                name,
                email,
                password
            };  
            if(!validateUserData(requestBody)){
                return res.status(400).json({ message: "Invalid user data" });
            }
            const checkEmailExists = await User.findOne({ email });
            if(checkEmailExists){
                return res.status(400).json({ message: "Email already exists" });
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                ...requestBody,
                password: hashedPassword
            });
            if(!user){
                return res.status(400).json({ message: "Failed to register user" });
            }
            return res.status(201).json({ message: "User registered successfully" });
        } catch (error:any) {
            return res.status(500).json({
                message: error.message,
                status: "failed"
            })
        }
    }
};

export default UserController;
