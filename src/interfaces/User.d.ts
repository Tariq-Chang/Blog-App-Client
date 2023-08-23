import { Profile } from "./Profile";

export interface User{
    username: string,
    email: string,
    password: string,
    profile: Profile,
    role: string[]
}