import React from 'react'
import JobSidebar from './JobSidebar'
import HomeCard from './HomeCard'
import TopCompany from './TopCompany'
import CustomButton from './CustomButton'

const JobPage = () => {
  return (
    <>
    <div className='flex gap-6 px-6 py-8 pb-4 pt-8'>
      <div>
        <JobSidebar/>
      </div>
      <div className='flex-1'> 
        <div>
          <p>Showing 6-6 of 10 reults</p>
        </div>
        <HomeCard/>
        <div className='flex justify-between items-center mt-4'>
          <div className='flex gap-2 mx-auto'>
          <CustomButton title='1'/>
          <CustomButton title='2'/>
          </div>
          <CustomButton title='Next'
          className='bg-transparent border-black border-2 py-0 text-black'/>
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
