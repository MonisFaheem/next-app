import JobPageBanner from '@/components/Banners/JobPageBanner'
import JobPage from '@/components/JobPage'
import JobSidebar from '@/components/JobSidebar'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <JobSidebar/> */}
      <JobPageBanner/>
      <JobPage/>
    </div>
  )
}

export default page
