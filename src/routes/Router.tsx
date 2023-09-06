import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Sidebar from '../components/Sidebar/Sidebar'
import App from '../App'

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
    path: '/dashboard',
    element: <App/>,
    children: [
      {
        path: 'blogs',
        element: <h1>All Blogs</h1>
      },
      {
        path: 'users',
        element: <h1>Users</h1>
      }
    ]
  }
])