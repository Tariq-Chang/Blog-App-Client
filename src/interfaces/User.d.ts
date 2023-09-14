import { Profile } from "./Profile";

export interface User{
    _id?:string,
    username?: string,
    email?: string,
    password?: string,
    profile?: Profile,
    role?: string[]
}