import blogLogo from '../../assets/images/blogger.png'
import {GoHomeFill} from 'react-icons/go'
import {IoCreateOutline} from 'react-icons/io5'
import { IoLogOutOutline } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/features/userSlice'


function Sidebar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        Cookies.remove('jwtToken')
        dispatch(logout())
        navigate('/login');
    }
    return (
        <div className="flex h-screen w-20 flex-col justify-between border-r bg-white">
            <div>
                <div className="flex h-20 w-20 items-center justify-center mt-6">
                    <img src={blogLogo} alt="" className="blog__logo" />
                </div>

                <div >
                    <div className="px-2">
                        <ul className="space-y-4 pt-12">
                            <li>
                                <Link
                                    to='blogs'
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                >
                                    <GoHomeFill className="h-8 w-8 text-gray-800"/>
                                    {/* <img src={homeIcon} alt="home" className='h-8 w-8' /> */}
                                    <span
                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                        Blogs
                                    </span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/create"
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                >
                                    <IoCreateOutline className="w-8 h-8 text-gray-800"/>
                                    <span
                                        className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                                    >
                                        Write
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
                <form action="/logout">
                    <button
                        type="submit"
                        onClick={handleLogout}
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"

                    >
                        <IoLogOutOutline className='w-8 h-8 text-gray-800'/>

                        <span
                            className="absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white opacity-0 group-hover:opacity-100"
                        >
                            Logout
                        </span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Sidebar