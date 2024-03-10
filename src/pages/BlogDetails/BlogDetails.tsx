import { useParams } from "react-router-dom"
import axios from '../../api/axios'
import { useEffect, useState } from "react";
import { Blog } from "../../interfaces/Blog";
import { CiCalendarDate } from "react-icons/ci";
import { FaHeart, FaUser } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { useSelector } from "react-redux";
import parse from 'html-react-parser';

const BlogDetails = () => {
    const params = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    const savedBlogs = useSelector((state: any) => state.blogs.savedBlogs);

    const isBookmarked = savedBlogs?.find((savedBlog:Blog) => savedBlog._id === blog?._id);
    const formatedCreatedAt = blog?.createdAt?.split('T')[0];

    const fetchBlog = async () => {
        const response = await axios.get(`/blogs/${params.blogId}`)
        setBlog(response.data);
    }

    useEffect(() => {
        fetchBlog();
    }, [])

    // formated likes and comments
    const formatedNumbers = (likes:string) => {
        if(likes?.length >= 4 && likes?.length < 7){
            likes = (Number(likes)/1000).toFixed(1) + 'K';
        }else if(likes?.length >= 7 && likes?.length < 10){
            likes = (Number(likes)/1000_000).toFixed(1) + 'M';
        }else if(likes?.length >= 10){
            likes = (Number(likes)/1000_000_000).toFixed(1) + 'B'
        }
        return likes;
    }
    return (
        <div className="w-[95%] mx-auto mt-3 md:w-[85%] lg:w-[75%] xl:w-[65%]">
            <div className="content relative">
                <img src={blog?.thumbnail} alt="" className="rounded-md w-full h-[60vh] object-cover " />
                <div className="absolute flex items-center -bottom-8 right-0">
                    <CiCalendarDate className="text-xl text-gray-800" />
                    <p className="ml-2 text-sm text-gray-600">{formatedCreatedAt ? new Date(formatedCreatedAt).toDateString() : "uknown"}</p>
                </div>
                <div className="absolute flex items-center -bottom-8 left-0">
                    <FaUser className="text-md text-gray-800" />
                    <p className="ml-2 text-sm text-gray-600">John Doe</p>
                </div>
            </div>
            <div className="blog__actions flex justify-between items-center ">
                <div className="blog__actionsLeft flex gap-x-6">
                    <div className={`flex items-center mt-16 cursor-pointer hover:text-blue-600`}>
                        <SlLike />
                        <p className="ml-2 relative text-gray-800">
                            <span className="text-sm text-blue-600 absolute -top-4">{blog?.like && formatedNumbers(blog?.like)}</span>
                            Like
                        </p>
                    </div>
                    <div className="flex items-center mt-16 cursor-pointer hover:text-blue-600">
                        <AiOutlineComment className="text-xl" />
                        <p className="ml-2 relative text-gray-800">
                            <span className="text-sm text-blue-600 absolute -top-4">{blog?.comments && formatedNumbers(blog?.comments?.length.toString())}</span>
                            Comments
                        </p>
                    </div>
                </div>
                <div className="blog__actionsRight flex gap-x-6">
                    <div className="flex items-center mt-16 cursor-pointer hover:text-blue-600">
                        <MdModeEdit />
                        <p className="ml-2 relative text-gray-800">Edit</p>
                    </div>
                    <div className={`${isBookmarked && "text-blue-600"} flex items-center mt-16 cursor-pointer hover:text-blue-600`}>
                        <FaHeart className="text-xl" />
                        <p className="ml-2 relative text-gray-800">Save</p>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl my-6 text-gray-800">{blog?.title}</h1>
            <div className="mt-10 pb-10">{blog?.content && parse(blog?.content)}</div>
        </div>
    )
}

export default BlogDetails
