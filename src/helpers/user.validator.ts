import { IProduct } from "../interfaces/product.interface";
import { IUser } from "../interfaces/user.interface";

export function validateUserData(data: any): data is IUser {
    return (
      typeof data.name === 'string' &&
      typeof data.email === 'string' &&
      typeof data.password === 'string'
    );
};


export const validateProductData = (data: IProduct)=>{
    return (
        typeof data.name === 'string' &&
        typeof data.price === 'number' &&
        typeof data.description === 'string' &&
        typeof data.quantity === 'number'
      );
};
