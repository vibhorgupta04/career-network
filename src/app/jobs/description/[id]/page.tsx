'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import JobDescription from '@/components/sections/JobDescription';

const JobsDescription = () => {
  // Get the job ID from the URL params
  const params = useParams();
  const jobId = params?.id;

  return (
    <>
      <div className="bg-gray-3 py-4">
        <div className="flex max-w-6xl mx-auto gap-4 font-satoshi">
          {jobId && <JobDescription jobId={jobId} />}
        </div>
      </div>
    </>
  );
};

export default JobsDescription;
