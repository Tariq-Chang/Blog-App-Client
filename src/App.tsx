import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import Cookies from "js-cookie";
import Sidebar from "./layout/Sidebar/Sidebar";
import Header from "./layout/Header/Header";
import { useGetBlogsMutation } from "./hooks/useGetBlogsMutation";
import SidebarRight from "./layout/SidebarRight/SidebarRight";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setBlogs } from "./redux/features/blogSlice";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getBlogsMutation = useGetBlogsMutation();
  useEffect(() => {
    
    const fetchData = async () => {
      const token = Cookies.get("jwtToken");
      if (!token) {
        navigate("/login");
      }
      const blogData = await getBlogsMutation.mutateAsync();
      dispatch(setBlogs(blogData));

      toast.success("Successful login!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    };
    fetchData();
  }, []);
  
  
  return (
    <>
      <div className="flex">
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-[0.7] ml-4">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
          <Header />
          <span className="p-4 mx-4 border-t">
            <Outlet />
          </span>
        </div>
        <div className="flex-[0.3]">
          <SidebarRight />
        </div>
      </div>
    </>
  );
}

export default App;
