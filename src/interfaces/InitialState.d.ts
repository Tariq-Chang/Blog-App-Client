import { User } from "./User";

export interface InitialState{
    activeUser?: User,
    blogs?: Blog[],
    myBlogs?: Blog[],
    savedBlogs: Blog[],
}