'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, FormEvent } from 'react';
import { IoLogOutOutline } from 'react-icons/io5';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@/context/AuthContext';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebase/firebase';
import Loading from './Loading';
import { UseAppContext } from '@/context/AppContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMenuOutline, IoCloseSharp } from 'react-icons/io5';
import { GoLock } from 'react-icons/go';
import { FaRegUser } from 'react-icons/fa6';
import { BsSuitcaseLg, BsBuildings } from 'react-icons/bs';

interface User {
  displayName: string;
  photoURL: string;
  accessToken: string;
}

const Header = () => {
  const router = useRouter();
  const { user, googleSignIn, logOut } = UserAuth();
  const { savedJobs } = UseAppContext();

  // State variables
  const [showSidebarFilter, setShowSidebarFilter] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [openDropdown, setOpenDropdown] = useState<boolean>(false);

  // Toggle sidebar visibility
  const toggleShowSidebarFilter = () => {
    setShowSidebarFilter(!showSidebarFilter);
  };

  // Handle Google Sign-In
  const handleSignIn = async () => {
    setShowSidebarFilter(false);
    setLoading(true);
    try {
      await googleSignIn();
      toast.success('Successfully signed in with Google!');
    } catch (error) {
      toast.error('Error signing in with Google.');
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle Sign-Out
  const handleSignOut = async () => {
    setOpenDropdown(false);
    try {
      await logOut();
      router.push('/');
      toast.success('Successfully signed out!');
    } catch (error) {
      toast.error('Error signing out.');
      console.log(error);
    }
  };

  // Handle form submission for email/password login
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user: any = userCredential.user;
      localStorage.setItem('token', user?.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      router.push('/');
      toast.success('Successfully logged in!');
    } catch (error) {
      toast.error('Error logging in.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Check authentication status on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkAuthentication = async () => {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
      };
      checkAuthentication();
    }
  }, [user]);

  return (
    <header className="bg-white border-b font-satoshi">
      <ToastContainer />
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="flex items-center justify-between px-2 max-w-6xl mx-auto">
          {/* Mobile Menu */}
          <div
            className="md:hidden my-4"
            onClick={toggleShowSidebarFilter}
          >
            <IoMenuOutline className="text-2xl" />
          </div>
          {showSidebarFilter && (
            <div className="md:hidden sidebar-filter-data active w-full">
              <div className="relative z-50 h-screen bg-white w-11/12 md:w-[510px] flex items-start p-6 md:p-12 rounded-r-xl">
                <div className="w-full pt-6">
                  <div className="border-b">
                    <Link href="/" onClick={toggleShowSidebarFilter}>
                      <Image
                        src="/logo.png"
                        alt="logo"
                        width={200}
                        height={10}
                        className="w-32"
                      />
                    </Link>
                  </div>
                  <div className="flex flex-col gap-4 my-6 text-lg text-gray-600 font-medium">
                    {!user && (
                      <Link
                        href={'/login'}
                        onClick={toggleShowSidebarFilter}
                        className="flex items-center gap-3"
                      >
                        <GoLock />
                        Login
                      </Link>
                    )}
                    {!user && (
                      <Link
                        href={'/register'}
                        className="flex items-center gap-3"
                        onClick={toggleShowSidebarFilter}
                      >
                        <FaRegUser />
                        Register
                      </Link>
                    )}
                    <Link
                      href={'/jobs'}
                      className="flex items-center gap-3"
                      onClick={toggleShowSidebarFilter}
                    >
                      <BsSuitcaseLg />
                      Jobs
                    </Link>
                    {/* <Link
                      href={'/companies'}
                      className="flex items-center gap-3"
                      onClick={toggleShowSidebarFilter}
                    >
                      <BsBuildings />
                      Companies
                    </Link> */}
                    <div
                      className="flex items-center gap-3"
                      onClick={handleSignOut}
                    >
                      <IoLogOutOutline className="text-xl" /> Sign out
                    </div>
                  </div>
                </div>
                <span
                  className="absolute left-6 top-4 text-black cursor-pointer"
                  onClick={toggleShowSidebarFilter}
                >
                  <IoCloseSharp className="text-2xl text-gray-500 hover:text-gray-600" />
                </span>
              </div>
            </div>
          )}
          <div className="flex items-center gap-10">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/logo.png"
                alt="logo"
                width={200}
                height={10}
                className="hidden md:block"
              />
            </Link>

            {/* Navigation links */}
            <div className="hidden md:flex gap-6 text-gray-700">
              <Link href="/jobs">Jobs</Link>
              <Link href="/companies">Companies</Link>
              {user && (
                <Link
                  href={user ? '/savedjobs' : '/login'}
                  className="flex items-center gap-1"
                >
                  Saved
                  <p className="text-sm bg-blue-1 text-white w-4 h-4 flex justify-center items-center rounded-full">
                    {savedJobs?.length}
                  </p>
                </Link>
              )}
            </div>
          </div>
          {/* Authentication buttons */}
          {user ? (
            <div
              className="relative flex items-center gap-4 py-1 px-2"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              {user?.photoURL && (
                <Image
                  src={user?.photoURL}
                  alt="user photo"
                  className="w-6 h-6 rounded-full"
                  width={200}
                  height={10}
                />
              )}
              {user?.displayName && <p>{user?.displayName}</p>}

              {openDropdown && (
                <div className="absolute top-8 right-4 w-full shadow-1 ring-1 ring-gray-200 bg-gray-100 rounded text-gray-600 p-4">
                  <p
                    className="flex items-center gap-4 cursor-pointer hover:text-gray-800"
                    onClick={handleSignOut}
                  >
                    <IoLogOutOutline className="text-xl" /> Sign out
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                href={'/login'}
                className="ring-1 ring-[#275DF5] rounded-full py-2 px-6 text-[#275DF5]"
                onClick={toggleShowSidebarFilter}
              >
                Login
              </Link>
              <Link
                href={'/register'}
                className="bg-[#F05537] text-white font-bold px-6 py-2 rounded-full"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
