'use client';

import CompaniesPage from '@/components/sections/CompaniesPage'
import JobsListFilter from '@/components/sections/JobsListFilter'
import React, { useState } from 'react'

const Companies = () => {
  const [filters, setFilters] = useState<any>({
    remote: false, //job_is_remote
    freshers: false, // job_required_experience.no_experience_required
    experienced: false, // job_required_experience.no_experience_required
    fulltime: false, // job_employment_type,
    contractor: false, // job_employment_type
  });

  return (
    <>
    <div className="bg-gray-3 py-4">
      <div className="flex max-w-6xl mx-auto gap-4 font-satoshi">
        <JobsListFilter filters={filters} setFilters={setFilters} />
        <CompaniesPage filters={filters} />
      </div>
    </div>
  </>
  )
}

export default Companies