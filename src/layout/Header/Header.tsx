import { useState } from "react";
import Search from "../../components/Search/Search";
import { BiSolidBell } from "react-icons/bi";
import { BsFillBookmarkFill } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
function Header() {
  const [showNofications, setShowNotifications] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleNotificationToggle = () => {
    setShowNotifications(!showNofications)
  }
  return (
    <div className="flex justify-between items-center mt-10 mx-6 mb-4">
      <Search />
      <div className="flex gap-x-4 items-end">
        <div className="relative">
            <BiSolidBell className="h-6 w-6 text-gray-700 cursor-pointer hover:text-gray-900" onClick={handleNotificationToggle}/>
          {
            showNofications && 
            <div
            className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-md"
            role="menu"
          >
            <div className="p-2">
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                role="menuitem"
              >
               Notification 1
              </a>

              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                role="menuitem"
              >
                 Notification 2
              </a>
            </div>
          </div>
          }
          
        </div>
        <BsFillBookmarkFill className="h-6 w-5 cursor-pointer text-gray-700 hover:text-gray-900" onClick={() => navigate('/bookmarks')}/>
      </div>
    </div>
  );
}

export default Header;
