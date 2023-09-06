import blogLogo from '../../assets/images/blogger.png'
import homeIcon from '../../assets/images/home.png'
import writeIcon from '../../assets/images/write.png';
import logoutIcon from '../../assets/images/logout.png'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'

function Sidebar() {
    const navigate = useNavigate();
    const handleLogout = () => {
        Cookies.remove('jwtToken')
        navigate('/login');
    }
    return (
        <div className="flex h-screen w-32 flex-col justify-between border-e bg-white">
            <div>
                <div className="inline-flex h-32 w-32 items-center justify-center">
                    <span
                        className="grid h-10 w-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600"
                    >
                        <img src={blogLogo} alt="" className='blog__logo' />
                    </span>
                </div>

                <div className="">
                    <div className="px-2">
                        <ul className="space-y-4 pt-12">
                            <li>
                                <Link
                                    to='blogs'
                                    className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                                >
                                    <img src={homeIcon} alt="home" className='h-8 w-8' />
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
                                    <img src={writeIcon} alt="write blog" className="w-8 h-8" />
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
                        <img src={logoutIcon} alt="Logout" className='w-8 h-8' />

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