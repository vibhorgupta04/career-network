import CompaniesPage from '@/components/sections/CompaniesPage'
import JobsListFilter from '@/components/sections/JobsListFilter'
import React from 'react'

const Companies = () => {
  return (
    <>
    <div className="bg-gray-3 py-4">
      <div className="flex max-w-6xl mx-auto gap-4 font-satoshi">
        <JobsListFilter />
        <CompaniesPage />
      </div>
    </div>
  </>
  )
}

export default Companies