import { useParams } from "react-router-dom"
import axios from '../../api/axios'
import { useEffect, useState } from "react";
import { Blog } from "../../interfaces/Blog";


const BlogDetails = () => {
    const params = useParams();
    const [blog, setBlog] = useState<Blog | null>(null);

    const fetchBlog = async() => {
        const response = await axios.get(`/blogs/${params.blogId}`)
        console.log(response.data);
        setBlog(response.data);
    }
    useEffect(() => {
        fetchBlog();
    }, [])
  return (
    <div className="w-[95%] mx-auto mt-3 h-20 object-cover md:w-[85%] lg:w-[75%] xl:w-[65%]">
      <img src={blog?.thumbnail} alt="" className="rounded-md"/>
    </div>
  )
}

export default BlogDetails
