
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import JobSearch from '@/components/sections/JobSearch'
import React from 'react'

const Home = () => {
  return (
    <>
      <Header />
      <main className='font-satoshi'>
        <JobSearch />
      </main>
      <Footer />
    </>
  )
}

export default Home