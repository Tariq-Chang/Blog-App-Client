import { useParams } from "react-router-dom"
import axios from '../../api/axios'
import { useEffect, useState } from "react";
import { Blog } from "../../interfaces/Blog";
import { CiCalendarDate } from "react-icons/ci";
import { FaHeart, FaUser } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { AiOutlineComment } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";


const BlogDetails = () => {
    const params = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);

    const fetchBlog = async () => {
        const response = await axios.get(`/blogs/${params.blogId}`)
        console.log(response.data);
        setBlog(response.data);
    }
    useEffect(() => {
        fetchBlog();
    }, [])
    return (
        <div className="w-[95%] mx-auto mt-3 md:w-[85%] lg:w-[75%] xl:w-[65%]">
            <div className="content relative">
                <img src={blog?.thumbnail} alt="" className="rounded-md w-full h-[60vh] object-cover " />
                <div className="absolute flex items-center -bottom-8 right-0">
                    <CiCalendarDate className="text-xl text-gray-800" />
                    <p className="ml-2 text-sm text-gray-600">{new Date(blog?.createdAt?.split('T')[0]).toDateString()}</p>
                </div>
                <div className="absolute flex items-center -bottom-8 left-0">
                    <FaUser className="text-md text-gray-800" />
                    <p className="ml-2 text-sm text-gray-600">John Doe</p>
                </div>
            </div>
            <div className="blog__actions flex justify-between items-center ">
                <div className="blog__actionsLeft flex gap-x-6">
                    <div className="flex items-center mt-16 cursor-pointer hover:text-blue-600">
                        <SlLike />
                        <p className="ml-2 relative text-gray-800">
                            <span className="text-sm text-blue-600 absolute -top-4">15k</span>
                            Like
                        </p>
                    </div>
                    <div className="flex items-center mt-16 cursor-pointer hover:text-blue-600">
                        <AiOutlineComment className="text-xl" />
                        <p className="ml-2 relative text-gray-800">
                            <span className="text-sm text-blue-600 absolute -top-4">2k</span>
                            Comments
                        </p>
                    </div>
                </div>
                <div className="blog__actionsRight flex gap-x-6">
                    <div className="flex items-center mt-16 cursor-pointer hover:text-blue-600">
                        <MdModeEdit />
                        <p className="ml-2 relative text-gray-800">Edit</p>
                    </div>
                    <div className="flex items-center mt-16 cursor-pointer hover:text-blue-600">
                        <FaHeart className="text-xl" />
                        <p className="ml-2 relative text-gray-800">Save</p>
                    </div>
                </div>
            </div>
            <h1 className="text-4xl my-6 text-gray-800">{blog?.title}</h1>
            <p className="mt-10 pb-10">{blog?.content}</p>
        </div>
    )
}

export default BlogDetails
