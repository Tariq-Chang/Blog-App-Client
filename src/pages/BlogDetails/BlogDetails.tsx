import { useParams } from "react-router-dom"
import axios from '../../api/axios'
import { useEffect, useState } from "react";
import { Blog } from "../../interfaces/Blog";
import { CiCalendarDate } from "react-icons/ci";
import { FaHeart, FaUser } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import parse from 'html-react-parser';
import { saveBlogs } from "../../redux/features/blogSlice";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { setCurrentUser } from "../../redux/features/userSlice";
import Comments from "../../layout/Comments/Comments";

const BlogDetails = () => {
    const {blogId} = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);
    const savedBlogs = useSelector((state: any) => state.blogs.savedBlogs);
    const dispatch = useDispatch();
    const [bookmark, setBookamark] = useState<boolean>(() => {
        const result = savedBlogs.find((savedBlog: Blog) => savedBlog?._id!.toString() === blogId)
        if (result) return true;
        else return false;
    });
    const activeUser = useSelector((state:any) => state.user.activeUser);
    const [isLiked, setIsLiked] = useState<boolean>(() => {
        if(activeUser.likedBlogs.includes(blogId)){
            return true;
        }else return false;
    });

    const formatedCreatedAt = blog?.createdAt?.split('T')[0];
    
    const fetchBlog = async () => {
        const response = await axios.get(`/blogs/${blogId}`)
        setBlog(response.data);
    }

    useEffect(() => {
        fetchBlog();
    }, [isLiked, activeUser])

    const likeBlog = async () => {
        if(isLiked === false){
            try {
                const response = await axios.patch(`blogs/${blogId}/incrementLikes`);
                dispatch(setCurrentUser(response.data.updatedUser))
                setIsLiked(true);
            } catch (error) {
                console.log("error", error);
            }
        }else{
            try {
                const response = await axios.patch(`blogs/${blogId}/decrementLikes`);
                dispatch(setCurrentUser(response.data.updatedUser))
                setIsLiked(false);
            } catch (error) {
                console.log("error", error);
            }
        }
    }

    const bookmarkBlog = async (e:any) => {
        e.stopPropagation();
        if(bookmark === false){
          try {
            const response = await axios.put(`blogs/saveBlog`, {blogId: blog?._id});
            const {savedBlogs} = response.data.savedBlogs;
    
            setBookamark(!bookmark);
            dispatch(saveBlogs(savedBlogs))
            return response;
          } catch (error) {
            console.error(error);
          }
        } else{
          try {
            const response = await axios.delete(`/blogs/removeSavedBlog/${blogId}`);
            const {savedBlogs} = response.data.savedBlogs;
            
            if(location.pathname === "/bookmarks") window.location.reload();
            
            setBookamark(!bookmark);
            dispatch(saveBlogs(savedBlogs))
            
            return response;
          } catch (error) {
            console.error(error);
          }
        }
    
      }

    const len = (value: number) => {
        let count = 0;
        while(Math.floor(value) > 0){
            value = value / 10;
            count++
        }
        return count;
    }
    // formated likes and comments
    const formatedNumbers = (count: number | string) => {
        if(typeof count === "string"){
            if (count?.length >= 4 && count?.length < 7) {
                count = (Number(count) / 1000).toFixed(1) + 'K';
            } else if (count?.length >= 7 && count?.length < 10) {
                count = (Number(count) / 1000_000).toFixed(1) + 'M';
            } else if (count?.length >= 10) {
                count = (Number(count) / 1000_000_000).toFixed(1) + 'B'
            }
        }else if(typeof count === "number"){
            if (len(count) >= 4 && len(count) < 7) {
                count = (count / 1000).toFixed(1) + 'K';
            } else if (len(count) >= 7 && len(count) < 10) {
                count = (count / 1000_000).toFixed(1) + 'M';
            } else if (len(count) >= 10) {
                count = (count / 1000_000_000).toFixed(1) + 'B'
            }
        }
        return count;
    }
    return (
        <div className="w-[95%] mx-auto mt-3 md:w-[85%] lg:w-[75%] xl:w-[65%]">
            <div className="content relative">
                <img src={blog?.thumbnail} alt="" className="rounded-md w-full border bg-gradient-to-r from-indigo-500 to-blue-400 h-[40vh] object-contain" />
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
                    <div className={`${isLiked && 'text-blue-600'} flex items-center mt-16 cursor-pointer hover:text-blue-600`} onClick={likeBlog}>
                        {isLiked ? <BiSolidLike/> : <BiLike />}
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
                    <div className={`${bookmark && "text-blue-600"} flex items-center mt-16 cursor-pointer hover:text-blue-600`} onClick={bookmarkBlog}>
                        <FaHeart className="text-xl" />
                        <p className="ml-2 relative text-gray-800">Save</p>
                    </div>
                </div>
            </div>
            <hr className="mt-5"/>
            <h1 className="text-4xl my-6 text-gray-800">{blog?.title}</h1>
            <div className="mt-10 pb-10 border-b border-gray-300 mb-5">{blog?.content && parse(blog?.content)}</div>
            <Comments blogId={blogId}/>
        </div>
    )
}

export default BlogDetails
