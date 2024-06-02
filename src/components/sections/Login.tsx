import Link from 'next/link';
import { FC, FormEvent, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdClose } from 'react-icons/io';

interface LoginProps {
  handleSubmit: (e: FormEvent) => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSignIn: () => void;
  toggleShowSidebarFilter: () => void;
}

const Login: FC<LoginProps> = ({
  handleSubmit,
  email,
  setEmail,
  password,
  setPassword,
  handleSignIn,
  toggleShowSidebarFilter,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className="sidebar-filter-data active w-full">
      <div className="relative h-screen bg-white w-11/12 md:w-[510px] flex items-start p-6 md:p-12 rounded-l-xl">
        <div className="w-full pt-6">
          <div className="flex justify-between">
            <p className="text-xl font-bold text-gray-1">Login</p>
            <Link href="/register">
              <p className="text-blue-1 font-bold">Register for free</p>
            </Link>
          </div>
          <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-6">
            <div className="flex flex-col text-sm text-gray-1">
              <label className="pb-1.5 font-bold">Email ID / Username</label>
              <input
                type="text"
                placeholder="Enter your active Email Id / Username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 w-full rounded-2xl focus:outline-none ring-1 ring-gray-200 focus:ring-blue-1"
              />
            </div>
            <div className="flex flex-col text-sm text-gray-1">
              <label className="pb-1.5 font-bold">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-4 py-3 w-full rounded-2xl focus:outline-none ring-1 ring-gray-200 focus:ring-blue-1"
                />
                <button
                  type="button"
                  className="absolute right-6 top-3 text-blue-1 font-bold text-sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  Show
                </button>
              </div>
              <div className="cursor-pointer text-blue-1 font-bold flex justify-end mt-2">
                Forgot Password?
              </div>
            </div>
            <button
              type="submit"
              className="py-2 bg-blue-1 rounded-full text-white font-bold"
            >
              Login
            </button>
            <div className="text-blue-1 font-bold mt-4 text-center">
              Use OTP to Login
            </div>
            <div className="flex gap-3">
              <div className="border-b mb-2.5 w-full" />
              <div className="text-gray-300 text-sm w-fit">Or</div>
              <div className="border-b mb-2.5 w-full" />
            </div>
            <button
              type="button"
              className="py-2 ring-1 ring-blue-1 text-blue-1 rounded-full font-bold flex items-center justify-center"
              onClick={handleSignIn}
            >
              <FcGoogle className="mr-6 text-xl" />
              <p>Sign in with Google</p>
            </button>
          </form>
        </div>
        <span
          className="absolute right-6 top-4 text-black cursor-pointer"
          onClick={toggleShowSidebarFilter}
        >
          <IoMdClose className="text-2xl text-gray-500 hover:text-gray-600" />
        </span>
      </div>
    </div>
  );
};

export default Login;
