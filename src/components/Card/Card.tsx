import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { Blog } from "../../interfaces/Blog";
import { useEffect, useState } from "react";
import axios from "axios";
import myAxios from '../../api/axios'
import Cookies from "js-cookie";
import { FaHeart } from "react-icons/fa";
import { saveBlogs } from "../../redux/features/blogSlice";
import { setCurrentUser } from "../../redux/features/userSlice";

function Card({ _id, title, author, thumbnail, blog }: Blog) {
  const activeUser = useSelector((state:any) => state.user.activeUser)
  const dispatch = useDispatch();
  const [bookmark, setBookamark] = useState<boolean>(() => {
    const result = (activeUser.savedBlogs.includes(_id?.toString()))
    console.log("result",result);
    if(result === false){
      return false;
    }else {
      return true;
    }
  });
  const [authorData, setAuthorData] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = Cookies.get("jwtToken");
        const response = await axios.get(
          `http://localhost:5000/api/v1/user/${author}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAuthorData(response?.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, []);


  const bookmarkBlog = async () => {
    const token = Cookies.get('jwtToken');
    if(bookmark === false){
      setBookamark(!bookmark);
      try {
        const response = await axios.put(
          `http://localhost:5000/api/v1/blogs/saveBlog/${_id}`,{blogId: blog?._id}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        dispatch(saveBlogs(blog));
        return response;
      } catch (error) {
        console.error(error);
      }
    } else{
      try {
        const response = await myAxios.delete(`/blogs/removeSavedBlog/${_id}`);
        console.log("remove response");
        // setCurrentUser(response?.data.user)
        dispatch(saveBlogs(blog));
        setBookamark(!bookmark);
        return response;
      } catch (error) {
        console.error(error);
      }
    }

  }
  return (
    <div className="w-100">
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src={thumbnail}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-16 sm:pt-28 lg:pt-40">
          <FaHeart
            className={`absolute top-0 left-0 text-2xl ${bookmark ? "text-red-500" : "text-gray-600"} m-4 cursor-pointer sm:m-6`}
            onClick={bookmarkBlog}
          />
          <div className="p-4 sm:p-6">
            <time className="block text-xs text-white/90">10th Oct 2022</time>

            <a href="#">
              <h3 className="mt-0.5 text-lg text-white">{title}</h3>
            </a>

            <div className="flex items-center gap-4 mt-2">
              <img
                className="w-10 h-10 rounded-full"
                src={authorData?.profile?.avatar}
                alt="avatar"
              />
              <div className="font-medium dark:text-white mb-1">
                <p className="text-white drop-shadow-lg">
                  {authorData?.username}
                </p>
                <p className="text-sm text-gray-200 dark:text-gray-400">
                  {authorData?.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Card;
