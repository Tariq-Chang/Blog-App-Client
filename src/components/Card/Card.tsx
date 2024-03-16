import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { Blog } from "../../interfaces/Blog";
import { useEffect, useState } from "react";
import axios from '../../api/axios'
import { FaHeart } from "react-icons/fa";
import { saveBlogs } from "../../redux/features/blogSlice";
import {useLocation} from 'react-router-dom';

function Card({ _id, title, author, thumbnail, blog }: Blog) {
  const location = useLocation();
  const savedBlogs = useSelector((state:any) => state.blogs.savedBlogs)
  const dispatch = useDispatch();
  const [isShortTitle, setIsShortTitle] = useState(() => {
    if (title && title.length >= 15) {
      return true;
    } else {
      return false;
    }
  });

  const [bookmark, setBookamark] = useState<boolean>(() => {
    const result = savedBlogs.find(
      (savedBlog: Blog) => savedBlog?._id!.toString() === _id
    );
    if (result) return true;
    else return false;
  });

  const [authorData, setAuthorData] = useState<User | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`users/${author}`);
        setAuthorData(response?.data.user);
      } catch (error) {
        console.error(error);
      }
    };
    getUser();
  }, [bookmark]);

  
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
        const response = await axios.delete(`/blogs/removeSavedBlog/${_id}`);
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

  const formatTitle = (title: string) => {
    if (title.length >= 15) {
      return title.slice(0, 15);
    }
    setIsShortTitle(false);
    return title;
  };

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
            className={`absolute top-0 left-0 text-2xl ${
              bookmark ? "text-blue-600" : "text-gray-600"
            } m-4 cursor-pointer sm:m-6`}
            onClick={bookmarkBlog}
          />
          <div className="p-4 sm:p-6">
            <time className="block text-xs text-white/90">10th Oct 2022</time>
            <h3 className="mt-0.5 text-lg text-white">
              {isShortTitle ? (
                <div>
                  {title && formatTitle(title)}...{" "}
                  <button
                    className="underline text-gray-200 ml-2 hover:text-blue-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsShortTitle(false)
                    }}
                  >
                    see more
                  </button>
                </div>
              ) : (
                <div>
                  {title}
                  <button
                    className="underline text-gray-200 ml-2 hover:text-blue-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsShortTitle(true)
                    }}
                  >
                    see less
                  </button>
                </div>
              )}
            </h3>
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
