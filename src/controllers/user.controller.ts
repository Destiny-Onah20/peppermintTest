import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { validateStatus, validateUserData } from "../helpers/user.validator";
import User from "../models/user.model";
import { isEnumValue } from "../helpers/values";
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

    async fetchUser(req: Request, res: Response){
        try {
           const status = req.query.status as string;
           console.log(status);
           
           if(!validateStatus(status) && isEnumValue(status.toUpperCase()) === false){
            return res.status(400).json({
                message: "Invalid status value"
            })
           };
           const users = await User.find({
            status:status.toUpperCase()
           });
           if(users.length === 0){
            return res.status(400).json({ message: "Failed to fetch users" });
           }
           return res.status(200).json({
            message: "Users fetched successfully",
            data: users
           });
        } catch (error: any) {
            return res.status(500).json({
                message: error.message,
                status: "failed"
            }) 
        }
    }
};

export default UserController;
