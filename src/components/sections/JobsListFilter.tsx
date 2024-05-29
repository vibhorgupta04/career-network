import React from 'react';

const JobsListFilter = () => {
  return (
    <div className="hidden md:block ml-2 bg-white shadow-1 rounded-xl my-6 w-fit pt-6 pb-5 px-7 min-w-[280px]">
      <div className="border-b pt-7 pb-4 font-bold">All Filters</div>

      <div className="py-5 border-b flex flex-col gap-4">
        <h3 className="font-bold">Work mode</h3>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <label htmlFor="vehicle1"> Work from Office</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="hybrid" name="hybrid" value="Hybrid" />
          <label htmlFor="hybrid"> Hybrid</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="hybrid" name="hybrid" value="Hybrid" />
          <label htmlFor="hybrid"> Hybrid</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="hybrid" name="hybrid" value="Hybrid" />
          <label htmlFor="hybrid"> Hybrid</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="hybrid" name="hybrid" value="Hybrid" />
          <label htmlFor="hybrid"> Hybrid</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="hybrid" name="hybrid" value="Hybrid" />
          <label htmlFor="hybrid"> Hybrid</label>
        </div>
        <div className="text-gray-1 text-sm font-medium flex items-center gap-2 cursor-pointer">
          <input type="checkbox" id="hybrid" name="hybrid" value="Hybrid" />
          <label htmlFor="hybrid"> Hybrid</label>
        </div>
      </div>
    </div>
  );
};

export default JobsListFilter;
