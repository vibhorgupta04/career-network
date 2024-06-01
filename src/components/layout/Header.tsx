'use client';
// import { useAuth } from '@/context/AuthContext';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoMdClose } from 'react-icons/io';
import { IoLogOutOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import Loading from './Loading';

const Header = () => {
  const router = useRouter();
  const { user, googleSignIn, logOut } = UserAuth();

  const [showSidebarFilter, setShowSidebarFilter] = useState<any>(false);
  const [showPassword, setShowPassword] = useState<any>(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSignIn = async () => {
    setShowSidebarFilter(false);
    try {
      setLoading(true);
      await googleSignIn();
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      setOpenDropdown(false);
      await logOut();
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  const toggleShowSidebarFilter = () => {
    setShowSidebarFilter(!showSidebarFilter);
    setShowPassword(false);
  };

  // if (loading) {
  //   return (
  //     <div className="h-screen w-screen flex items-center justify-center">
  //       <Loading />
  //     </div>
  //   );
  // }

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        showPassword
      );
      console.log(userCredential);
      const user:any = userCredential.user;
      localStorage.setItem('token', user?.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/');
    } catch (error) {
      console.error(error);
    }
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
        {loading ? null : !user ? (
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
        ) : (
          <>
            <div
              className="relative flex items-center gap-4 py-1 px-2"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              <Image
                src={user?.photoURL}
                alt="logo"
                className="w-6 h-6 rounded-full"
                width={200}
                height={10}
              />
              <p>{user.displayName}</p>

              {openDropdown && (
                <div className="w-full shadow-1 ring-1 ring-gray-200 absolute bg-gray-100 rounded top-8 right-4 text-gray-600 p-4">
                  {/* <p>Welcome, {user.displayName}</p> */}
                  <p
                    className="flex items-center gap-4 cursor-pointer hover:text-gray-800 "
                    onClick={handleSignOut}
                  >
                    <IoLogOutOutline className="text-xl" /> Sign out
                  </p>
                </div>
              )}
            </div>
          </>
        )}
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
                <Link href="/register">
                  <p className="text-blue-1 font-bold">Register for free</p>
                </Link>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="pt-6 flex flex-col gap-6 ">
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
                    value={showPassword}
                    onChange={(e) => setShowPassword(e.target.value)}
                    className="px-4 py-3 w-full rounded-2xl focus:outline-none ring-1 ring-gray-200 focus:ring-blue-1"
                  />
                  <button
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
              <button
                className="py-2 ring-1 ring-blue-1 text-blue-1 rounded-full font-bold flex items-center justify-center"
                onClick={handleSignIn}
              >
                <FcGoogle className="mr-6 text-xl" />
                <p>Sign in with Google</p>
              </button>
            </form>
            {/* {loading ? null : !user ? (
          <ul className="flex">
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Login
            </li>
            <li onClick={handleSignIn} className="p-2 cursor-pointer">
              Sign up
            </li>
          </ul>
        ) : (
          <div>
            <p>Welcome, {user.displayName}</p>
            <p className="cursor-pointer" onClick={handleSignOut}>
              Sign out
            </p>
          </div>
        )} */}
          </div>

          <span
            className="absolute right-6 top-4 text-black cursor-pointer"
            onClick={toggleShowSidebarFilter}
          >
            <IoMdClose className="text-2xl text-gray-500 hover:text-gray-600" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
