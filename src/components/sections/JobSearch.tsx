import Image from 'next/image';
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';

const JobSearch = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className="text-center pt-16 pb-8">
        <h1 className="font-bold text-3xl md:text-4xl mb-2.5">Find your dream job now</h1>
        <p className="text-xl">5 lakh+ jobs for you to explore</p>
      </div>
      <div className="md:w-3/4 mx-2 md:mx-auto px-4 py-3 shadow-3xl rounded-full flex justify-between items-center">
        <div className='w-full flex'>
          <IoSearchOutline className="text-2xl text-gray-600" />
          <input
            type="text"
            placeholder="Enter skills / designations / companies"
            className="w-fit md:w-full px-2 focus:outline-none placeholder:text-gray-400"
          />
        </div>
        <button className="bg-blue-1 text-white font-semibold px-4 md:px-8 py-2 rounded-full">
          Search
        </button>
      </div>
      <div className="w-11/12 mx-auto pr-10 ring-1 ring-gray-300 rounded-xl bg-gradient-green mt-10 flex flex-col md:flex-row justify-between md:items-center gap-6 ">
        <Image
          src={'/images/hp-touchpoint.png'}
          alt="logo"
          className="w-auto md:h-auto h-60 object-centered"
          width={200}
          height={10}
        />
        <div className="lg:w-3/4 px-2 flex flex-col gap-4">
          <h4 className="text-lg font-bold">Introducing Naukri 360</h4>
          <p className="text-gray-400 font-thin text-sm">
            Discover powerful tools & tips that help you prepare for every stage
            of your career
          </p>
        </div>
        <button className="mx-2 md:mx-0 mb-4 w-fit md:min-w-[140px] h-fit text-white bg-blue-1 px-4 py-2.5 rounded-full">
          Start exploring
        </button>
      </div>
    </div>
  );
};

export default JobSearch;
