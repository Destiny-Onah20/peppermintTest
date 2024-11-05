import { ObjectId } from "mongoose";

export enum UserSatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
};

export interface IUser {
    id: string;
    name: string;
    email: string;
    status: UserSatus;
    password: string;
    product: ObjectId
};
