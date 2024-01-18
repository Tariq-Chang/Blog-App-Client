import { useMutation } from "@tanstack/react-query"
import { getAllBlogs, getUserBlogs } from "../api/blogsApi/blogsApi"

export const useGetAllBlogsMutation = () => {
    return useMutation(() => getAllBlogs())
}

export const useGetMyBlogsMutation = () => {
    return useMutation(() => getUserBlogs())
}