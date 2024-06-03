'use client';
import React, { useEffect, useState } from 'react';
import Loading from '../layout/Loading';
import { fetchCompanies } from '@/api/user';
import Image from 'next/image';

const CompaniesPage = () => {
  // Defining the CompaniesPage component, which accepts a filters prop

  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState<any>({});
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    // useEffect hook to fetch companies data when the component mounts
    try {
      const fetchAndSetJobs = async () => {
        setLoading(true);
        // Fetch companies data
        const { response, error }: any = await fetchCompanies();
        if (error) setHasError(true);
        setCompanies(response?.data);
        setLoading(false);
      };
      // Call the async function
      fetchAndSetJobs();
    } catch (error) {
      console.log(error);
      setHasError(true);
      setLoading(false);
    }
  }, []);

  if (loading)
    // Render loading component if loading state is true
    return (
      <div className="h-[60vh] mx-auto flex justify-center items-center">
        <Loading />
      </div>
    );

  if (hasError && !loading) return <div>Invalid job.</div>;
  return (
    <section className="max-w-6xl mx-auto">
      <div className="shadow-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mx-2">
        {companies.length > 0 &&
          companies?.[0]?.groupDetails?.map(
            ({
              groupId,
              groupLogo,
              groupName,
              rating,
              reviewsCount,
              groupTags,
            }: any) => (
              <div
                key={groupId}
                className="w-full flex items-center gap-3 px-6 py-3 bg-white ring-1 ring-gray-100 rounded-xl"
              >
                <div className="h-fit rounded border ring-gray-100">
                  <Image
                    src={groupLogo.desktop}
                    alt="logo"
                    className="w-12 h-12"
                    width={200}
                    height={10}
                  />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{groupName}</h3>

                  <div className="flex items-center text-sm gap-2 text-gray-600">
                    {rating && <p>⭐ {rating}</p>} |
                    {reviewsCount && <div>{reviewsCount} reviews</div>}
                  </div>
                  <div className="flex items-center text-sm gap-1 text-gray-600">
                    {groupTags?.businessSize && (
                      <p className="text-xs text-gray-500 ring-1 ring-gray-100 px-2 py-1 mt-2 rounded-full">
                        {groupTags?.businessSize}
                      </p>
                    )}
                    {!groupTags?.primaryIndustry && (
                      <p className="text-xs text-gray-500 ring-1 ring-gray-100 px-2 py-1 mt-2 rounded-full">
                        {groupTags?.employerType}
                      </p>
                    )}
                    {groupTags?.primaryIndustry && (
                      <p className="text-xs text-gray-500 ring-1 ring-gray-100 px-2 py-1 mt-2 rounded-full">
                        {groupTags?.primaryIndustry}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default CompaniesPage;
