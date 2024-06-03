'use client';
import React, { useEffect, useState } from 'react';
import Loading from '../layout/Loading';
import { fetchCompanies } from '@/api/user';

const CompaniesPage = ({ filters }: { filters: any }) => {
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState<any>({});
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchAndSetJobs = async () => {
        setLoading(true);
        const { response, error }: any = await fetchCompanies();
        if (error) setHasError(true);
        setCompanies(response?.data);
        setLoading(false);
      };
      fetchAndSetJobs();
    } catch (error) {
      console.log(error);
      setHasError(true);
      setLoading(false);
    }
  }, []);

  if (loading)
    return (
      <div className="h-[60vh] mx-auto flex justify-center items-center">
        <Loading />
      </div>
    );

  if (hasError && !loading) return <div>Invalid job.</div>;
  return (
    <section className="max-w-6xl mx-auto">
      {companies.length > 0 &&
        companies?.map((company: any, index: number) => (
          <div key={index}>ds</div>
        ))}
    </section>
  );
};

export default CompaniesPage;
