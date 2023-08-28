import { useNavigate } from 'react-router-dom'
import './App.css'
import Router from './routes/Router'
import { useCallback, useEffect } from 'react'
import Cookies from 'js-cookie'
import { useGetBlogsMutation } from './hooks/useGetBlogsMutation'
import Search from './components/Search/Search'
import Sidebar from './components/Sidebar/Sidebar'
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
    <div>
      <Router/>
      {/* <Sidebar /> */}
      {/* <Search/> */}
    </div>
    </>
  )
}

export default App
