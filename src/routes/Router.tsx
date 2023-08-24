import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login/Login'
import Signup from '../components/Signup/Signup'
import Sidebar from '../components/Sidebar/Sidebar'

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup/>} />
        <Route path="/dashboard" element={<Sidebar/>} />
      </Routes>
    </div>
  )
}

export default Router