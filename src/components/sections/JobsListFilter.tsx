import React from 'react';

interface JobsListFilterProps {
  filters: { [key: string]: boolean };
  setFilters: React.Dispatch<React.SetStateAction<{ [key: string]: boolean }>>;
}

const JobsListFilter: React.FC<any> = ({ filters, setFilters }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setFilters((prevFilters: any) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  return (
    <div className="hidden md:block h-fit ml-2 bg-white shadow-1 rounded-xl my-6 w-fit pt-6 pb-5 px-7 min-w-[280px]">
      <div className="border-b pt-7 pb-4 font-bold">All Filters</div>

      <div className="py-5 border-b flex flex-col gap-4">
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="remote"
            name="remote"
            checked={filters.remote}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="remote">Remote</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="freshers"
            name="freshers"
            checked={filters.freshers}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="freshers">Freshers</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="experienced"
            name="experienced"
            checked={filters.experienced}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="experienced">Experienced</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="fulltime"
            name="fulltime"
            checked={filters.job_employment_type}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="fulltime">FULLTIME</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="contractor"
            name="contractor"
            checked={filters.contractor}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="contractor">Contractor</label>
        </div>
      </div>
    </div>
  );
};

export default JobsListFilter;
