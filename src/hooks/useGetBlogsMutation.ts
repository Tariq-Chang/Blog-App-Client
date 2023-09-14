import { useMutation } from "@tanstack/react-query"
import { getBlogs } from "../api/userApi/blogsApi"
import { useDispatch } from "react-redux"
import { setBlogs } from "../redux/features/blogSlice";


export const useGetBlogsMutation = () => {
    const dispatch = useDispatch();
    return useMutation(() => getBlogs(), {
        onSuccess: (blogs) => {
            console.log(blogs);
            dispatch(setBlogs(blogs));
        },
        onError: (error) => {
            console.log(error);
        }
    })
}