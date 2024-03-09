import { useDispatch, useSelector } from "react-redux";
import { User } from "../../interfaces/User";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { logout, setAllUsers } from "../../redux/features/userSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
function SidebarRight() {
  const [showAvatarOptions, setShowAvatarOptions] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user: User = useSelector((state: any) => state.user.activeUser);
  const usersList: User[] = useSelector((state:any) => state.user.usersList.users);

  useEffect(() => {
    console.log("inside fetch Users")
    const fetchUsers = async() => {
      const response = await axios.get('/users');
      dispatch(setAllUsers(response.data));
    }
    fetchUsers();
  }, [])

  const handleShowAvatarOptions = () => {
    setShowAvatarOptions(!showAvatarOptions);
  };

  const handleLogout = () => {
    Cookies.remove("jwtToken");
    localStorage.removeItem('isLoggedIn');
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className="flex h-screen p-4 pt-12 flex-col  border-l border-l-gray-300 bg-white sticky top-0">
      <div className="flex items-center w-100">
          <img
            id="avatarButton"
            className="w-10 h-10 object-contain rounded-full cursor-pointer border-2 border-gray-800"
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
      {/* Logged in user options */}
      <div
        className={`z-10 ${
          !showAvatarOptions && "hidden"
        } absolute bg-white divide-gray-100 rounded-lg shadow-lg w-56 mt-10 dark:bg-gray-700 dark:divide-gray-600`}
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

      <hr className="border-t border-t-gray-300 my-4"/>
      {/* UsersList */}
      <h3 className="text-3xl text-blue-600 pb-5">Users</h3>
      <div className="overflow-auto  h-full">
      {
        usersList?.map((user:User) => {
          return (
            <div className="flex items-center w-100 mb-4 bg-gray-200 px-2 py-4 rounded-md cursor-pointer hover:bg-gray-300">
              <img
                id="avatarButton"
                className="w-10 h-10 object-contain rounded-full border-2 border-gray-800"
                src={user?.profile?.avatar}
              />
              <div className="px-2 flex flex-col">
                <small className="mb-0 font-bold" style={{ fontSize: "14px" }}>
                  {user.username}
                </small>
                <small>{user.email}</small>
              </div>
            </div>
          )
        })
      }

      </div>
    </div>
  );
}

export default SidebarRight;
