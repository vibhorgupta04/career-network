import moment from 'moment';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { fetchJobDetails } from '@/api/user';
import Loading from '../layout/Loading';
import { IoTimeOutline } from 'react-icons/io5';
import { IoMdHome } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5';
import { BsBriefcase } from 'react-icons/bs';
import { IoBookmark } from 'react-icons/io5';
import { IoBookmarkOutline } from 'react-icons/io5';
import { UseAppContext } from '@/context/AppContext';
import { UserAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const JobDescription = ({ jobId }: { jobId: any }) => {
  const router = useRouter();
  const { setSavedJobs } = UseAppContext();
  const { user } = UserAuth();
  const [loading, setLoading] = useState(false);
  const [jobDetails, setJobDetails] = useState<any>({});
  const [hasError, setHasError] = useState<boolean>(false);
  const [saveJob, setSaveJob] = useState(false);

  useEffect(() => {
    // If the user is not authenticated, redirect to the login page
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  useEffect(() => {
    if (jobId) {
      try {
        const fetchAndSetJobs = async () => {
          setLoading(true);
          const { response, error }: any = await fetchJobDetails(jobId);
          if (error) setHasError(true);
          setJobDetails(response?.data);
          setLoading(false);
        };
        fetchAndSetJobs();
      } catch (error) {
        console.log(error);
        setHasError(true);
        setLoading(false);
      }
    }
  }, [jobId]);

  useEffect(() => {
    const jobsFromLS = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    const isSaved = jobsFromLS.some((job: any) => job?.id === jobId);
    setSaveJob(isSaved);
  }, []);

  const handleSaveJob = () => {
    const jobsFromLS = JSON.parse(localStorage.getItem('savedJobs') || '[]');
    if (saveJob) {
      // Remove job from saved jobs
      const updatedJobs = jobsFromLS.filter((job: any) => job.id !== jobId);
      localStorage.setItem('savedJobs', JSON.stringify(updatedJobs));
      setSavedJobs(updatedJobs);
      setSaveJob(false);
    } else {
      // Add job to saved jobs
      jobsFromLS.push(jobDetails);
      localStorage.setItem('savedJobs', JSON.stringify(jobsFromLS));
      setSavedJobs(jobsFromLS);
      setSaveJob(true);
    }
  };

  if (loading)
    return (
      <div className="h-[60vh] mx-auto flex justify-center items-center">
        <Loading />
      </div>
    );

  if (hasError && !loading) return <div>Invalid job.</div>;

  const {
    employer_name,
    job_id,
    job_city,
    job_description,
    job_title,
    job_employment_type,
    job_country,
    employer_logo,
    job_highlights,
    job_google_link,
    apply_options,
    job_required_skills,
    job_posted_at_datetime_utc,
    job_is_remote,
  } = jobDetails;

  const parseJobDescription = (description: any) => {
    const sections = description.split('\n\n');
    const parsedData = sections.map((section: any, index: number) => {
      const lines = section.split('\n');
      const title = lines[0];
      const content = lines
        .slice(1)
        .map((line: any, idx: any) => (
          <li key={idx}>{line.replace('• ', '• ')}</li>
        ));
      return (
        <div key={index}>
          <h2 className="text-lg font-semibold pt-4">{title}</h2>
          <ul className="">{content}</ul>
        </div>
      );
    });
    return parsedData;
  };

  return (
    <section className="max-w-6xl mx-auto">
      <div
        key={job_id}
        className="relative w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6"
      >
        <h3 className="font-bold text-lg md:text-2xl">{job_title} </h3>
        <div className="text-xs pt-4 flex gap-2">
          {employer_logo && (
            <Image
              src={employer_logo}
              alt="Job Listing"
              width={60} // specify the width of the image
              height={60} // specify the height of the image
              className="object-contain h-10"
            />
          )}
          <div>
            <span className="font-medium text-base">{employer_name}</span>
            <span className="pt-2 flex items-center gap-2">
              {job_city}, {job_country}
            </span>
          </div>
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
              {!job_required_skills ? 'No degree mentioned' : 'Degree Required'}
            </div>
          )}
        </div>
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
                    target="_blank"
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
        <div
          className="absolute top-4 right-4 md:right-6 cursor-pointer flex items-center"
          onClick={handleSaveJob}
        >
          {saveJob ? (
            <IoBookmark className="text-xl text-blue-1" />
          ) : (
            <IoBookmarkOutline className="text-xl" />
          )}
          {saveJob ? <p className="text-blue-1">SAVED</p> : 'SAVE'}
        </div>
      </div>
      {job_description && (
        <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
          <h3 className="text-xl font-bold">Job Description</h3>
          {parseJobDescription(job_description)}
        </div>
      )}
      {job_highlights?.Qualifications && (
        <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
          <h3 className="text-xl font-bold">Qualification</h3>
          <div className="mt-4">{job_highlights?.Qualifications}</div>
        </div>
      )}
      {job_highlights?.Responsibilities && (
        <div className="w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6">
          <h3 className="mt-6 text-xl font-bold">Responsibilities</h3>
          <div className="mt-4">{job_highlights?.Responsibilities}</div>
        </div>
      )}
    </section>
  );
};

export default JobDescription;
