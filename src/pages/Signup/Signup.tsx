import { ChangeEvent, useState } from "react";
import blogIcon from "../../assets/images/blogger.png";

import {MdEmail} from 'react-icons/md';
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../hooks/useRegisterMutation";
import { BiSolidLockAlt } from "react-icons/bi";
import {FaUserAlt} from 'react-icons/fa';
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, registerSchemaType } from "../../validations/registerValidation";
import { ToastContainer, toast } from "react-toastify";
import { HashLoader } from "react-spinners";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting}
  } = useForm<registerSchemaType>({resolver: zodResolver(registerSchema)})
  const registerMutation = useRegisterMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate()
  console.log("errors",errors)
  const onSubmit:SubmitHandler<registerSchemaType> = async(data) => {
    try {
      setLoading(true);
      const userData = await registerMutation.mutateAsync(data);
      console.log("userData", userData)
      toast.success("User registered successfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

      setTimeout(() => navigate('/login'),5000)

    } catch (error) {
      toast.error("Invalid credentials!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
    {loading && (
        <div className="z-10 fixed inset-0 flex items-center justify-center ">
          <HashLoader color="#141414" size={80} />
        </div>
      )}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-[80px] w-auto"
            src={blogIcon}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to create an account
          </h2>
        </div>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            className="space-y-6"
            
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2 relative">
                <input
                  id="username"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="off"
                  // required
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("username")}
                />
                <FaUserAlt className="absolute right-3 top-4 h-5 w-8 flex items-center text-gray-700"/>
                {errors.username && (
                  <span className="text-red-800 block mt-2">
                    {errors.username?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2 relative">
                <input
                  id="email"
                  type="email"
                  placeholder="example@email.com"
                  autoComplete="off"
                  // required
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("email")}
                />
                <MdEmail className="absolute right-3 top-4 h-5 w-8 flex items-center text-gray-700"/>
                {errors.email && (
                  <span className="text-red-800 block mt-2">
                    {errors.email?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  type="password"
                  placeholder="******"
                  autoComplete="off"
                  // required
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register('password')}
                  />
                <BiSolidLockAlt className="absolute right-3 top-4 h-5 w-8 flex items-center text-gray-700"/>
                {errors.password && (
                  <span className="text-red-800 block mt-2">
                    {errors.password?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
