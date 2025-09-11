import React from 'react'
import JobSidebar from './JobSidebar'
import HomeCard from './HomeCard'
import TopCompany from './TopCompany'
import CustomButton from './CustomButton'
import jobs from "@/constant/jobs.json";

const JobPage = () => {
  return (
    <>
    <div className='flex gap-6 px-6 py-8 pb-4 pt-8'>
      <div>
        <JobSidebar/>
      </div>
      <div className='flex-1'> 
        <div className="flex justify-between items-center w-full mb-7 mt-4">
          <p className="text-md text-gray-700">Showing 6–6 of 10 results
           </p>
          <select
              className="mr-10 border border-black bg-transparent text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
                <option value="recent">Sorted by latest</option>
                <option value="salaryHigh">Salary: High to Low</option>
                <option value="salaryLow">Salary: Low to High</option>
                <option value="alphabetical">Alphabetical</option>
          </select>
        </div>

        <HomeCard jobs={jobs}/>
        <div className='flex justify-between items-center mt-4'>
          <div className='flex gap-4 mx-auto'>
          <CustomButton title='1'/>
          <CustomButton title='2'/>
          </div>
          <CustomButton title='Next >'
          className='bg-transparent hover:bg-transparent mr-8 border-black border-2 py-0 text-black'/>
        </div>
      </div>
      
    </div>
    <div className='mt-4 px-6'>
    <TopCompany/>
    </div>
    </>
  )
}

export default JobPage
