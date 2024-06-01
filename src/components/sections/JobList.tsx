'use client';

import { fetchJobs } from '@/api/user';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { CiLocationOn } from 'react-icons/ci';
import { BsBriefcase } from 'react-icons/bs';
import { HiOutlineDocumentText } from 'react-icons/hi2';
import Image from 'next/image';
import moment from 'moment';

const JobList = () => {
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState<any[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchAndSetJobs = async () => {
        setLoading(true);
        const { response }: any = await fetchJobs();
        setJobs(response.data);
        setLoading(false);
      };
      fetchAndSetJobs();
    } catch (error) {
      setHasError(true)
      setLoading(false);
    }
  }, []);

  if (loading) return <div>Loading....</div>
  if (hasError && !loading) return <div>No jobs found.</div>
  return (
    <section>
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
            className="max-w-[700px] mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 w-fit h-fit pt-6 pb-5 px-3 md:px-6"
          >
            <Link href={`/jobs/description/${id}`} key={id}>
              <h3 className="font-bold">{employer_name}</h3>
              <div className="text-xs">
                <span className="text-sm font-bold">{job_title} </span>
                <span className="font-bold">⭐ 3.6 </span>
                <span>| </span>
                <span className="font-medium">
                  {Math.floor(Math.random() * 999)} Reviews
                </span>
              </div>
              <div className="mt-6 font-medium">
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-gray-1">
                  <span className="flex items-center gap-2">
                    <BsBriefcase className="text-lg" />
                    0-5 Yrs
                  </span>
                  <span className="text-gray-400">|</span>
                  <span>
                    {job_salary_currency === 'USD' && '$'}
                    {job_min_salary
                      ? `${job_min_salary} - ${job_salary_currency === 'USD' && '$'
                      }${job_max_salary}`
                      : '₹  Not Disclosed'}{' '}
                    {job_salary_period && 'a'}{' '}
                    {job_salary_period?.toLowerCase()}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="capitalize">{job_employment_type}</span>
                  <span className="text-gray-400">|</span>
                  <span className="flex items-center gap-2">
                    <CiLocationOn className="text-lg" />
                    {job_city}, {job_country}
                  </span>
                </div>
                <div className="flex items-start lg:items-center gap-2">
                  <HiOutlineDocumentText className="min-w-4" />
                  <span className="text-gray-1 text-sm font-medium">
                    {job_description.slice(0, 100)}...
                  </span>
                </div>
              </div>
              <div className="text-gray-2 text-xs font-medium mt-4">
                <span>Physician</span>
                <span>Nuclear Medicine</span>
                <span>Nuclear Engineering</span>
                <span>Medicine</span>
              </div>
              <div className="text-[11px] text-gray-2 mt-4">
                {moment().diff(moment(job_posted_at_datetime_utc), 'days')}+
                days ago
              </div>
              {employer_logo && (
                <Image
                  src={employer_logo}
                  alt="Job Listing"
                  width={40} // specify the width of the image
                  height={40} // specify the height of the image
                  className="absolute w-6 h-6"
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
