import { useMutation } from "@tanstack/react-query"
import { getBlogs } from "../api/userApi/blogsApi"


export const useGetBlogsMutation = () => {
    return useMutation(() => getBlogs(), {
        onSuccess: (blogs) => {
            console.log(blogs);
        },
        onError: (error) => {
            console.log(error);
        }
    })
}