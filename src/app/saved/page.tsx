'use client';
import { UseAppContext } from '@/context/AppContext';
import moment from 'moment';
import Image from 'next/image';
import { IoBookmark } from 'react-icons/io5';
import { IoTimeOutline } from 'react-icons/io5';
import { IoMdHome } from 'react-icons/io';
import { IoBookOutline } from 'react-icons/io5';
import { BsBriefcase } from 'react-icons/bs';
import Link from 'next/link';

const SavedJobs = () => {
  const { savedJobs } = UseAppContext();

  return (
    <section className="bg-gray-3">
      <div className="max-w-6xl mx-auto">
        <div className="py-6 text-center ">
          {savedJobs?.length == 0 ? (
            <div className="h-[60vh] text-center flex gap-4 flex-col items-center justify-center">
              <IoBookmark className="text-8xl text-blue-1" />

              <h3 className="text-xl font-semibold">No saved jobs</h3>
              <p>
                Tap the bookmark on any job that interests you to save it for
                later
              </p>
            </div>
          ) : (
            <div>
              {savedJobs &&
                savedJobs.map(
                  ({
                    id,
                    employer_name,
                    job_id,
                    job_city,
                    job_title,
                    job_employment_type,
                    job_country,
                    employer_logo,
                    job_google_link,
                    apply_options,
                    job_required_skills,
                    job_posted_at_datetime_utc,
                    job_is_remote,
                  }: any) => (
                    <div
                      key={job_id}
                      className="relative w-full mx-2 md:mr-2 bg-white shadow-1 rounded-xl my-6 h-fit pt-6 pb-5 px-3 md:px-6"
                    >
                      <Link href={`/jobs/description/${id}`} key={id}>
                        <h3 className="font-bold text-left text-lg md:text-2xl">
                          {job_title}{' '}
                        </h3>
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
                            <span className="pt-1 flex items-center gap-2">
                              {job_city}, {job_country}
                            </span>
                          </div>
                        </div>
                        <div className="mb-2 md:mb-4 flex flex-wrap items-center gap-2 md:gap-3 text-sm text-gray-1">
                          <div className=" text-gray-2 mt-4 flex items-center gap-1">
                            <IoTimeOutline className="text-lg" />
                            {moment().diff(
                              moment(job_posted_at_datetime_utc),
                              'days'
                            )}
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
                      </Link>
                      <div className="border-b my-6"></div>
                      <div className="flex flex-col md:flex-row justify-end">
                        <div className="flex gap-2">
                          <div className="flex flex-wrap md:flex-row items-center gap-2">
                            {apply_options &&
                              apply_options
                                ?.slice(0, 3)
                                .map(({ apply_link, publisher }: any) => (
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
                  )
                )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SavedJobs;
