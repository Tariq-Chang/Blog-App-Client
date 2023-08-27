import { Link, useNavigate } from 'react-router-dom'
import blogIcon from '../../assets/images/blogger.png'
import { ChangeEvent, useEffect, useState } from 'react'
import { User } from '../../interfaces/User'
import Cookies from 'js-cookie'
import { useLoginMutation } from '../../hooks/useLoginMutation'
function Login() {
  const [loginData, setLoginData] = useState<User>({})
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = Cookies.get('jwtToken');

    if(token){
      navigate('/dashboard');
    }
  },[])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => {
      return {...prev, [e.target.name]: e.target.value}
  })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginMutation.mutate(loginData);
    
  }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[80px] w-auto"
            src={blogIcon}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@email.com"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="******"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
              >
                Sign in
              </button>
            </div>
          </form>
     
          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login