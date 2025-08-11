import Image from 'next/image'
import React from 'react'
import { TbBadge } from "react-icons/tb";
import { LuBriefcaseBusiness,LuWallet } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
const HomeCard = () => {
  const jobs =[
    {
    id: 1,
    logo: "/images/logo.png",
    time: "10 mins ago",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    category: "Hotel & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New York, USA"
  },
  {
    id: 2,
    logo: "/images/logo.png",
    time: "10 mins ago",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    category: "Hotel & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New York, USA"
  },
  {
    id: 3,
    logo: "/images/logo.png",
    time: "10 mins ago",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    category: "Hotel & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New York, USA"
  },
  {
    id: 4,
    logo: "/images/logo.png",
    time: "10 mins ago",
    title: "Forward Security Director",
    company: "Bauch, Schuppe and Schulist Co",
    category: "Hotel & Tourism",
    type: "Full time",
    salary: "$40000-$42000",
    location: "New York, USA"
  },
  ]
  return (

    <div className='px-4 sm:px-6 lg:px-8 mb-12'>
      <div>
      <h1 className="font-bold text-5xl mb-1">Recent Jobs Available</h1>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, perspiciatis?
      </p>
    </div>
      <div className="flex justify-end mb-4">
    <button className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
      View All
    </button>
  </div>
      <div className='flex flex-col gap-8'>
      {jobs.map((job)=>(
<div key={job.id} className='w-full bg-white mx-auto rounded-2xl shadow-sm p-6 flex flex-col sm:flex-row justify-between items-center gap-4'>
      {/* left side */}
<div className='flex items-start gap-4 w-full sm:w-auto'>
  <div><Image src={job.logo}alt='company logo'
  width={60}
  height={60}/></div>
  <div>
    <p className='text-green-500 text-sm mb-1 rounded'>{job.time}</p>
    <h2 className='text-2xl font-semibold text-gray-900'>{job.title}</h2>
    <p className='text-[16px] mb-6 mt-2 text-gray-950'>{job.company}</p>
    <div className='flex flex-wrap gap-4 text-gray-600 text-sm'>
      <div className='flex items-center gap-1'><LuBriefcaseBusiness className='text-teal-600 text-[22px]'/>{job.category}</div>
      <div className='flex items-center gap-1'><MdAccessTime className='text-teal-600 text-[22px]' />{job.type}</div>
      <div className='flex items-center gap-1'><LuWallet className='text-teal-600 text-[22px]'/>{job.salary}</div>
      <div className='flex items-center gap-1'><IoLocationOutline className='text-teal-600 text-[22px]'/>{job.location}</div>
    </div>
  </div>
</div>

{/* right side */}
<div className='flex flex-col justify-between items-end gap-4'>
  <button className='text-gray-500 hover:text-gray-700'><TbBadge /></button>
  <button className='px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors'>Job details</button>
</div>

    </div>
      ))}
    </div>
    </div>
  )
}

export default HomeCard
