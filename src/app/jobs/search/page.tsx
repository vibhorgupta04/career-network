'use client';

import JobList from '@/components/sections/JobList';
import JobsListFilter from '@/components/sections/JobsListFilter';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const Jobs = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword') || '';
  const [filters, setFilters] = useState<any>({
    remote: false, //job_is_remote
    freshers: false, // job_required_experience.no_experience_required
    experienced: false, // job_required_experience.no_experience_required
    fulltime: false, // job_employment_type,
    contractor: false, // job_employment_type
  });
  return (
    <div className="bg-gray-3 py-4">
      <div className="flex max-w-6xl mx-auto gap-4 font-satoshi">
        <JobsListFilter filters={filters} setFilters={setFilters} />
        <JobList keyword={keyword} filters={filters} />
      </div>
    </div>
  );
};

export default Jobs;
