import {  createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import App from '../App'
import Blogs from '../pages/Blogs/Blogs'
import Profile from '../pages/Profile/Profile'
import MyBlogs from '../pages/MyBlogs/MyBlogs'
import LandingPage from '../pages/LandingPage/LandingPage'
import Create from '../pages/CreatePage/Create'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Signup/>
  },
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'dashboard',
        element: <Blogs/>
      },
      {
        path: 'myBlogs',
        element: <MyBlogs/>
      },
    ]
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: 'create',
    element: <Create/>
  }
])