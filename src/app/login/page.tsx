'use client';
import Login from '@/components/sections/Login';
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

const page = () => {
  const { user } = UserAuth();
  const router = useRouter();
  useEffect(() => {
    // If the user is authenticated, redirect to the home page
    if (user) {
      router.push('/');
    }
  }, [user, router]);
  return (
    <div>
      <Login />
    </div>
  );
};

export default page;
