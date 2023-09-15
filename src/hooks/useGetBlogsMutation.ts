import { useMutation } from "@tanstack/react-query"
import { getBlogs } from "../api/blogsApi/blogsApi"

export const useGetBlogsMutation = () => {
    return useMutation(() => getBlogs())
}