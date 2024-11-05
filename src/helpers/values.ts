import { UserSatus } from "../interfaces/user.interface";

export function isEnumValue(value: any): boolean {
    return Object.values(UserSatus).includes(value.toUpperCase() as UserSatus);
}
