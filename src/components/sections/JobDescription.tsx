import Link from 'next/link';
import moment from 'moment';

import { IoTimeOutline } from 'react-icons/io5';
import { IoMdHome } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5';
import { BsBriefcase } from 'react-icons/bs';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchJobDetails } from '@/api/user';
import Loading from '../layout/Loading';

const JobDescription = ({ jobId }: { jobId: any }) => {
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState<any>({});
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    if(jobId){
      try {
        const fetchAndSetJobs = async () => {
          setLoading(true);
          const { response, error }: any = await fetchJobDetails(jobId);
          if(error) setHasError(true)
          setJobDetails(response?.data);
          setLoading(false);
        };
        fetchAndSetJobs();
      } catch (error) {
        console.log(error);
        setHasError(true)
        setLoading(false);
      }
    }
  }, [jobId]);

  if (loading) return <div className='h-[60vh] mx-auto flex justify-center items-center'><Loading /></div>

  if (hasError && !loading) return <div>Invalid job.</div>

  const {
    employer_name,
    job_id,
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
    job_highlights,
    job_google_link,
    apply_options,
    job_required_skills,
    job_posted_at_datetime_utc,
    job_is_remote,
  } = jobDetails
  return (
    <section className="max-w-6xl mx-auto">
      <>
        <div
          key={job_id}
          className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6"
        >
          <Link href={`/jobs/description/${job_id}`} key={job_id}>
            <h3 className="font-bold">{employer_name}</h3>
            <div className="text-xs">
              <span className="text-sm font-bold">{job_title} </span>
              <span className="font-bold">⭐ 3.6 </span>
              <span>| </span>
              <span className="font-medium">
                {Math.floor(Math.random() * 999)} Reviews
              </span>
            </div>
            <div className="mb-2 md:mb-4 flex flex-wrap items-center gap-2 md:gap-3 text-sm text-gray-1">
              <div className=" text-gray-2 mt-4 flex items-center gap-1">
                <IoTimeOutline className="text-lg" />
                {moment().diff(moment(job_posted_at_datetime_utc), 'days')}
                days ago
              </div>
              {job_is_remote && (
                <div className=" text-gray-2 mt-4 flex items-center gap-1">
                  <IoMdHome className="text-lg" />
                  Work From Home
                </div>
              )}
              {job_employment_type && (
                <div className=" text-gray-2 mt-4 flex items-center gap-1">
                  <BsBriefcase className="text-lg" />
                  {job_employment_type}
                </div>
              )}
              {!job_required_skills && (
                <div className=" text-gray-2 mt-4 flex items-center gap-1">
                  <IoBookOutline className="text-lg" />
                  {!job_required_skills
                    ? 'No degree mentioned'
                    : 'Degree Required'}
                </div>
              )}
            </div>
            {employer_logo && <Image
              src={employer_logo}
              alt="Job Listing"
              width={40} // specify the width of the image
              height={40} // specify the height of the image
              className='absolute w-6 h-6'
            />}
          </Link>
          <div className="border-b my-6"></div>
          <div className="flex flex-col md:flex-row justify-end">
            <div className="flex gap-2">
              <div className="flex flex-wrap md:flex-row items-center gap-2">
                {apply_options &&
                  apply_options?.map(({ apply_link, publisher }: any) => (
                    <a
                      className="rounded-full ring-1 ring-blue-1 px-4 py-2 text-blue-1"
                      href={apply_link}
                      key={apply_link}
                    >
                      Apply on {publisher}
                    </a>
                  ))}
                {job_google_link && (
                  <div className="ml-2 w-fit bg-blue-1 text-white px-4 py-2 rounded-full font-semibold ">
                    <a href={job_google_link} target="_blank">
                      See On Google
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
          <h3 className="text-xl font-bold">Job Description</h3>
          <div className="mt-4">{job_description}</div>
        </div>
        <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
          <h3 className="text-xl font-bold">Qualification</h3>
          <div className="mt-4">{job_highlights?.Qualifications}</div>
        </div>
        <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
          <h3 className="mt-6 text-xl font-bold">Responsibilities</h3>
          <div className="mt-4">{job_highlights?.Responsibilities}</div>
        </div>
      </>
    </section>
  );
};

export default JobDescription;
