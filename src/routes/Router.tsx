import {  createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import App from '../App'
import MyBlogs from '../pages/MyBlogs/MyBlogs'
import Profile from '../pages/Profile/Profile'

export const router = createBrowserRouter([
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
        element: <h1>All Blogs</h1>
      },
      {
        path: 'blogs',
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