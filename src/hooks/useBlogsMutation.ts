import { useMutation } from "@tanstack/react-query"
import { getAllBlogs, getUserBlogs, searchBlogByTitle } from "../api/blogsApi/blogsApi"

export const useGetAllBlogsMutation = () => {
    return useMutation(() => getAllBlogs())
}

export const useGetMyBlogsMutation = () => {
    return useMutation(() => getUserBlogs())
}

export const useSearchBlogByTitle = () => {
    return useMutation((title: string) => searchBlogByTitle(title))
}