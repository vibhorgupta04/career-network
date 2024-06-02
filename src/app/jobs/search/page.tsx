'use client';

import JobList from '@/components/sections/JobList';
import JobsListFilter from '@/components/sections/JobsListFilter';
import { usePathname, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Jobs = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  return (
    <>
      <div className="bg-gray-3 py-4">
        <div className="flex max-w-6xl mx-auto gap-4 font-satoshi">
          <JobsListFilter />
          <JobList keyword={keyword} />
        </div>
      </div>
    </>
  );
};

export default Jobs;
