"use client"

import JobList from '@/components/sections/JobList';
import React from 'react';
import { useParams } from 'next/navigation'

const JobsDescription = () => {
  const params = useParams()
console.log(params.id);
  return (
    <>
      <div className="bg-gray-3 py-4">
        <div className="flex max-w-6xl mx-auto gap-4 font-satoshi">
          
          <JobList />
        </div>
      </div>
    </>
  );
};

export default JobsDescription;
