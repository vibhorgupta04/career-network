'use client';
import { UserAuth } from '@/context/AuthContext';
import { auth } from '@/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { FormEvent, useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'react-toastify';
import Loading from '../layout/Loading';

// interface LoginProps {
//   handleSubmit: (e: FormEvent) => void;
//   email: string;
//   setEmail: (email: string) => void;
//   password: string;
//   setPassword: (password: string) => void;
//   handleSignIn: () => void;
//   toggleShowSidebarFilter: () => void;
// }

const Login = () => {
  const router = useRouter();
  const { user, googleSignIn } = UserAuth();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    // If the user is authenticated, redirect to the home page
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  // Handle Google Sign-In
  const handleSignIn = async () => {
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
      toast.error(`Error logging in.`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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

  // Render loading screen if loading
  // if (loading) {
  //   return (
  //     <div className="h-screen w-screen flex items-center justify-center">
  //       <Loading />
  //     </div>
  //   );
  // }

  return (
    <div className="bg-gray-3 py-6 px-2">
      {loading ? (
        <div className="h-screen w-screen flex items-center justify-center">
          <Loading />
        </div>
      ) : (
        <div className="max-w-[600px] mx-auto shadow-1 bg-white flex items-start p-6 md:p-12 rounded-l-xl">
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
          {/* <span
          className="absolute right-6 top-4 text-black cursor-pointer"
          // onClick={toggleShowSidebarFilter}
        >
          <IoMdClose className="text-2xl text-gray-500 hover:text-gray-600" />
        </span> */}
        </div>
      )}
    </div>
  );
};

export default Login;
