import { User } from "./User";

export interface Comment{
    _id?: string,
    comment?: string,
    user?: User,
    createdAt?: string,
    updatedAt?: string,   
}