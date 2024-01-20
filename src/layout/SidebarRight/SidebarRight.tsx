import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { useState } from "react";
import Cookies from "js-cookie";
import { logout } from "../../redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";
function SidebarRight() {
  const [showAvatarOptions, setShowAvatarOptions] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user: User = useSelector((state: any) => state.user.activeUser);

  const handleShowAvatarOptions = () => {
    setShowAvatarOptions(!showAvatarOptions);
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    localStorage.removeItem('isLoggedIn');
    dispatch(logout());
    navigate("/login");
  };
  return (
    <div className="flex h-screen p-4 pt-12 flex-col  border-l border-l-gray-300 bg-white sticky top-0">
      <div className="flex items-center w-100">
          <img
            id="avatarButton"
            className="w-10 h-10 object-contain rounded-full cursor-pointer"
            src={user?.profile?.avatar}
            alt="User dropdown"
            onClick={handleShowAvatarOptions}
          />
        <div className="px-2 flex flex-col">
          <small className="mb-0 font-bold" style={{ fontSize: "14px" }}>
            {user.username}
          </small>
          <small>{user.email}</small>
        </div>
      </div>
      <div
        className={`z-10 ${
          !showAvatarOptions && "hidden"
        } bg-white divide-gray-100 rounded-lg shadow-lg w-56 mt-2 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <div className="px-4 py-3 text-sm text-gray-900 border-b dark:text-white">
          <div>{user.username}</div>
          <div className="font-medium truncate">{user?._id}</div>
        </div>
        <ul
          className="py-2 text-sm text-gray-900 border-b dark:text-gray-200"
          aria-labelledby="avatarButton"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <Link to='/profile'
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="py-1" onClick={handleLogout}>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
}

export default SidebarRight;
