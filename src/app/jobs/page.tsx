import JobList from '@/components/sections/JobList';
import JobsListFilter from '@/components/sections/JobsListFilter';
import React from 'react';

const Jobs = () => {
  return (
    <>
      <div className="bg-gray-3 py-4">
        <div className="flex max-w-6xl mx-auto gap-4 font-satoshi">
          <JobsListFilter />
          <JobList />
        </div>
      </div>
    </>
  );
};

export default Jobs;
