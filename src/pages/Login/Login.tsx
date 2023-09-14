import { Link, useNavigate } from "react-router-dom";
import blogIcon from "../../assets/images/blogger.png";
import { ChangeEvent, useEffect, useState } from "react";
import { User } from "../../interfaces/User";
import Cookies from "js-cookie";
import { useLoginMutation } from "../../hooks/useLoginMutation";
import { BiSolidLockAlt } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import {
  loginSchemaType,
  loginSchema,
} from "../../validations/loginValidation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });
  const [loginError, setLoginError] = useState<string>();
  const loginMutation = useLoginMutation();
  const navigate = useNavigate();
  console.log(errors);
  useEffect(() => {
    const token = Cookies.get("jwtToken");

    if (token) {
      navigate("/dashboard");
    }
  }, []);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setLoginData((prev) => {
  //     return { ...prev, [e.target.name]: e.target.value };
  //   });
  // };

  const onSubmit: SubmitHandler<loginSchemaType> = async(data) => {
    console.log(data);
    console.log(loginMutation.isError);
    try {
      loginMutation.mutate(data);      
    } catch (error) {
        if (loginMutation.isError && data.email && data.password) {
        setLoginError("User is not authenticated");
      }
    }
  };
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
        {loginError && (
          <div className="bg-red-400 pb-2 mt-2 w-[400px] m-auto rounded-md">
            <p className="text-red-700 text-center mt-2">User does not exist</p>
          </div>
        )}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
                  placeholder="example@email.com"
                  autoComplete="email"
                  type="email"
                  className={`
                  block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 `}
                  {...register("email")}
                />

                <MdEmail className="absolute right-3 top-4 h-5 w-8 flex items-center text-gray-700" />
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
                  // name="password"
                  type="password"
                  placeholder="******"
                  // autoComplete="current-password"
                  // onChange={handleChange}
                  className="block w-full rounded-md border-0 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  {...register("password")}
                />
                <BiSolidLockAlt className="absolute right-3 top-4 h-5 w-8 flex items-center text-gray-700" />
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
                disabled={isSubmitting}
                className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
