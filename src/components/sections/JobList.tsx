'use client';

import { fetchJobs, fetchJobsByKeyword } from '@/api/user';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';
import { BsBriefcase } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import Image from 'next/image';
import moment from 'moment';
import { UserAuth } from '@/context/AuthContext';

const JobList = ({ keyword, filters }: { keyword?: string; filters: any }) => {
  const { user } = UserAuth();

  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    try {
      // Fetch jobs based on keyword and filters
      const fetchAndSetJobs = async () => {
        setLoading(true);
        const { response }: any = keyword
          ? await fetchJobsByKeyword(keyword, filters)
          : await fetchJobs(filters);
        setJobs(response.data);
        setLoading(false);
      };
      fetchAndSetJobs();
    } catch (error) {
      setHasError(true);
      setLoading(false);
    }
  }, [filters]);

  // Render loading indicator
  if (loading) return <div>Loading....</div>;
  // Render error message if no jobs found
  if (hasError && !loading) return <div>No jobs found.</div>;
  return (
    <section>
      {/* Map over jobs and render job listings */}
      {jobs?.map(
        ({
          employer_name,
          id,
          job_city,
          job_description,
          job_min_salary,
          job_salary_currency,
          job_max_salary,
          job_title,
          job_salary_period,
          job_employment_type,
          job_country,
          employer_logo,
          job_posted_at_datetime_utc,
        }) => (
          <div
            key={id}
            className="relative z-0 max-w-[700px] mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 w-fit h-fit pt-6 pb-5 px-3 md:px-6"
          >
            {/* Link to job description page */}
            <Link href={user ? `/jobs/description/${id}` : '/login'} key={id}>
              {/* Job Title and Employer */}
              <h3 className="font-bold">{employer_name}</h3>
              <div className="text-xs">
                <span className="text-sm font-bold">{job_title} </span>
                <span>| </span>
                <span className="font-medium">
                  {Math.floor(Math.random() * 999)} Reviews
                </span>
              </div>
              {/* Job Details */}
              <div className="mt-6 font-medium">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-1">
                  <span className="capitalize">{job_employment_type}</span>
                  <span className="text-gray-400">|</span>
                  <span>
                    {job_salary_currency === 'USD' && '$'}
                    {job_min_salary
                      ? `${job_min_salary} - ${
                          job_salary_currency === 'USD' && '$'
                        }${job_max_salary}`
                      : '₹  Not Disclosed'}{' '}
                    {job_salary_period && 'a'}{' '}
                    {job_salary_period?.toLowerCase()}
                  </span>

                  <span className="text-gray-400">|</span>
                  <span className="flex items-center gap-2">
                    <CiLocationOn className="text-lg" />
                    {job_city}, {job_country}
                  </span>
                </div>
                {/* Job Description */}
                <div className="flex items-start lg:items-center gap-2">
                  <HiOutlineDocumentText className="min-w-4" />
                  <span className="text-gray-1 text-sm font-medium">
                    {job_description.slice(0, 100)}...
                  </span>
                </div>
              </div>
              {/* Posted Time */}
              <div className="text-[11px] text-gray-2 mt-4">
                {moment().diff(moment(job_posted_at_datetime_utc), 'days')}+
                days ago
              </div>
              {/* Employer Logo */}
              {employer_logo && (
                <Image
                  src={employer_logo}
                  alt="Job Listing"
                  width={40} // specify the width of the image
                  height={40} // specify the height of the image
                  className="absolute right-6 top-4 w-8 h-8 object-contain"
                />
              )}
            </Link>
          </div>
        )
      )}
    </section>
  );
};

export default JobList;
