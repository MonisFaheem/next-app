import PageBanner from '@/components/Banners/PageBanner'
import JobPage from '@/components/JobPage'
import JobSidebar from '@/components/JobSidebar'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* <JobSidebar/> */}
      <PageBanner title='Jobs'/>
      <JobPage/>
    </div>
  )
}

export default page
