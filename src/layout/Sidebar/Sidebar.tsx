import blogLogo from "../../assets/images/blogger.png";
import { GoHomeFill } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";

import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/features/userSlice";
import { useState } from "react";

function Sidebar() {
  const [activeItem, setActiveItem] = useState<string>("home");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    Cookies.remove("jwtToken");
    localStorage.removeItem("isLoggedIn");
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex h-screen w-20 flex-col justify-between border-r bg-white sticky top-0">
      <div>
        <div className="flex h-20 w-20 items-center justify-center mt-6">
          <img src={blogLogo} alt="" className="blog__logo" />
        </div>

        <div>
          <div className="px-2">
            <ul className="space-y-4 pt-12">
              <li>
                <Link
                  to="dashboard"
                  onClick={() => setActiveItem("home")}
                  className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700 ${activeItem === "home" && "bg-gray-200"}`}
                >
                  <GoHomeFill className={`h-8 w-8 text-gray-800 group-hover:text-blue-600 ${activeItem === "home" && " text-blue-600"}`} />
                  {/* <img src={homeIcon} alt="home" className='h-8 w-8' /> */}
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Home
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="myBlogs"
                  onClick={() => setActiveItem("myblogs")}
                  className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700 ${activeItem === "myblogs" && "bg-gray-200"}`}
                >
                  <LiaBlogSolid className={`h-8 w-8 text-gray-800 group-hover:text-blue-600 ${activeItem === "myblogs" && " text-blue-600"}`} />
                  {/* <img src={homeIcon} alt="home" className='h-8 w-8' /> */}
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    My Blogs
                  </span>
                </Link>
              </li>

              <li>
                <Link
                  to="/create"
                  onClick={() => setActiveItem("create")}
                  className={`group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700 ${activeItem === "create" && "bg-gray-200"}`}
                >
                  <IoCreateOutline className={`h-8 w-8 text-gray-800 group-hover:text-blue-600 ${activeItem === "create" && " text-blue-600"}`} />
                  <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
                    Write
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
        <form action="/logout">
          <button
            type="submit"
            onClick={handleLogout}
            className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
          >
            <IoLogOutOutline className="w-8 h-8 text-gray-800" />

            <span className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidebar;
