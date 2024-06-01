'use client';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import JobDescription from '@/components/sections/JobDescription';
import JobSearch from '@/components/sections/JobSearch';
import { AuthContextProvider } from '@/context/AuthContext';
import React from 'react';

const Home = () => {
  return (
    <>
      {/* <AuthContextProvider> */}
        <Header />
        <main className="font-satoshi">
          {/* <JobDescription /> */}
          <JobSearch />
        </main>
        <Footer />
      {/* </AuthContextProvider> */}
    </>
  );
};

export default Home;
