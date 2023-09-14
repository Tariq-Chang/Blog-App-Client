import { Route, Routes, createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login'
import Signup from '../pages/Signup/Signup'
import Sidebar from '../layout/Sidebar/Sidebar'
import App from '../App'
import { Dashboard } from '@mui/icons-material'
import Card from '../components/Card/Card'
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
        element: <Card/>
      },
      {
        path: 'users',
        element: <h1>Users</h1>
      }
    ]
  }
])