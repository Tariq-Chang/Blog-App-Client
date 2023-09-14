import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import Sidebar from './layout/Sidebar/Sidebar'
import Header from './layout/Header/Header'
import { useGetBlogsMutation } from './hooks/useGetBlogsMutation'
import SidebarRight from './layout/SidebarRight/SidebarRight'
function App() {
  const navigate = useNavigate();
  const getBlogsMutation = useGetBlogsMutation();
  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (!token) {
      navigate('/login');
    }
    getBlogsMutation.mutate();
  }, [getBlogsMutation])
  return (
    <>
      <div className='flex'>
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-[0.7] ml-4">
          <Header />
          <span className='p-4 mx-4 border-t'>
            <Outlet />
          </span>
        </div>
        <div className="flex-[0.3]">
          <SidebarRight/>
        </div>
      </div>
    </>
  )
}

export default App
