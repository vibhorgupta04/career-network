'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdClose } from 'react-icons/io';

const Header = () => {
  const [showSidebarFilter, setShowSidebarFilter] = useState<any>(false);
  const [showPassword, setShowPassword] = useState<any>(false);

  const toggleShowSidebarFilter = () => {
    setShowSidebarFilter(!showSidebarFilter);
    setShowPassword(false)
  };
  return (
    <header className="bg-white border-b font-satoshi">
      <div className="flex items-center justify-between px-2 max-w-6xl mx-auto">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image
              src={'/logo.png'}
              alt="logo"
              className="w-auto h-auto"
              width={200}
              height={10}
            />
          </Link>
          <div className="hidden md:flex gap-6 text-gray-700">
            <Link href="/jobs">Jobs</Link>
            <span>Companies</span>
            <span>Services</span>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="ring-1 ring-[#275DF5] rounded-full py-2 px-6 text-[#275DF5]"
            onClick={toggleShowSidebarFilter}
          >
            Login
          </button>
          <button className="bg-[#F05537] text-white text-bold px-6 py-2 rounded-full">
            Register
          </button>
        </div>
      </div>

      <div
        className={
          showSidebarFilter
            ? 'sidebar-filter-data active w-full'
            : 'sidebar-filter-data'
        }
      >
        <div className="relative h-screen rounded-l-xl bg-white w-11/12 md:w-[510px] flex item-start p-6 md:p-12">
          <div className="w-full pt-6">
            <div className="tex-black w-full">
              <div className="flex justify-between">
                <p className="text-xl font-bold text-gray-1">Login</p>
                <p className="text-blue-1 font-bold">Register for free</p>
              </div>
            </div>
            <div className="pt-6 flex flex-col gap-6 ">
              <div className="flex flex-col text-sm text-gray-1">
                <label className="pb-1.5 font-bold">Email ID / Username</label>
                <input
                  type="text"
                  placeholder="Enter your active Email Id / Username"
                  className="px-4 py-3 w-full rounded-2xl focus:outline-none ring-1 ring-gray-200 focus:ring-blue-1"
                />
              </div>
              <div className="flex flex-col text-sm text-gray-1">
                <label className="pb-1.5 font-bold">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="px-4 py-3 w-full rounded-2xl focus:outline-none ring-1 ring-gray-200 focus:ring-blue-1"
                  />
                  <button className="absolute right-6 top-3 text-blue-1 font-bold text-sm" onClick={() => setShowPassword(!showPassword)}>
                    Show
                  </button>
                </div>
                <div className="cursor-pointer text-blue-1 font-bold flex justify-end mt-2">
                  Forgot Password?
                </div>
              </div>
              <button className="py-2 bg-blue-1 rounded-full text-white font-bold">
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
              <button className="py-2 ring-1 ring-blue-1 text-blue-1 rounded-full font-bold flex items-center justify-center">
                <FcGoogle className="mr-6 text-xl" />
                <p>Sign in with Google</p>
              </button>
            </div>
          </div>

          <span
            className="absolute right-6 top-4 text-black cursor-pointer"
            onClick={toggleShowSidebarFilter}
          >
            <IoMdClose className='text-2xl text-gray-500 hover:text-gray-600' />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
