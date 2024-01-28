import {  createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import App from '../App'
import Blogs from '../pages/Blogs/Blogs'
import Profile from '../pages/Profile/Profile'
import MyBlogs from '../pages/MyBlogs/MyBlogs'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <h1>Landing Page</h1>
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
      {
        path: 'users',
        element: <h1>Users</h1>
      }
    ]
  },
  {
    path: '/profile',
    element: <Profile/>
  }
])