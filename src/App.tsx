import { Outlet, useNavigate } from 'react-router-dom'
import './App.css'
import { useEffect } from 'react'
import Cookies from 'js-cookie'
import Sidebar from './layout/Sidebar/Sidebar'
import Search from './components/Search/Search'
import Header from './layout/Header/Header'
function App() {
  const navigate = useNavigate();
  // const getBlogsMutation = useGetBlogsMutation();
  useEffect(() => {
    const token = Cookies.get('jwtToken');
    if (!token) {
      navigate('/login');
    }
    // getBlogsMutation.mutate();
  }, [])
  return (
    <>
      <div className='flex'>
        <div className="flex">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-[0.6]">
          <Header />
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default App
