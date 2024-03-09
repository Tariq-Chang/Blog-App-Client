export interface Blog{
    _id?: string,
    title?: string,
    content?: string,
    author?: string,
    thumbnail?: string,
    like?:string,
    tags?:[string],
    comments?:[string],
    blog?:Blog,
    createdAt?:string,
    updatedAT?:string,    
}