import Image from 'next/image'
import React from 'react'
import { BiBookmarkPlus } from "react-icons/bi";
import { LuBriefcaseBusiness,LuWallet } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import CustomButton from './CustomButton';
import jobs from '../constant/jobs.json'
import Link from 'next/link';
const HomeCard = () => {
  // const jobs =[
  //   {
  //   id: 1,
  //   logo: "/images/logo.png",
  //   time: "10 mins ago",
  //   title: "Forward Security Director",
  //   company: "Bauch, Schuppe and Schulist Co",
  //   category: "Hotel & Tourism",
  //   type: "Full time",
  //   salary: "$40000-$42000",
  //   location: "New York, USA"
  // },
  // {
  //   id: 2,
  //   logo: "/images/logo.png",
  //   time: "10 mins ago",
  //   title: "Forward Security Director",
  //   company: "Bauch, Schuppe and Schulist Co",
  //   category: "Hotel & Tourism",
  //   type: "Full time",
  //   salary: "$40000-$42000",
  //   location: "New York, USA"
  // },
  // {
  //   id: 3,
  //   logo: "/images/logo.png",
  //   time: "10 mins ago",
  //   title: "Forward Security Director",
  //   company: "Bauch, Schuppe and Schulist Co",
  //   category: "Hotel & Tourism",
  //   type: "Full time",
  //   salary: "$40000-$42000",
  //   location: "New York, USA"
  // },
  // {
  //   id: 4,
  //   logo: "/images/logo.png",
  //   time: "10 mins ago",
  //   title: "Forward Security Director",
  //   company: "Bauch, Schuppe and Schulist Co",
  //   category: "Hotel & Tourism",
  //   type: "Full time",
  //   salary: "$40000-$42000",
  //   location: "New York, USA"
  // },
  // {
  //   id: 5,
  //   logo: "/images/logo.png",
  //   time: "10 mins ago",
  //   title: "Forward Security Director",
  //   company: "Bauch, Schuppe and Schulist Co",
  //   category: "Hotel & Tourism",
  //   type: "Full time",
  //   salary: "$40000-$42000",
  //   location: "New York, USA"
  // },
  // ]
  return (

    <div className='px-4 sm:px-6 lg:px-8 mb-12'>
      <div className='flex flex-col gap-6'>
      {jobs.map((job)=>(
<div
  key={job.id}
  className="w-full bg-white mx-auto rounded-2xl shadow-md h-60 p-6 flex flex-col sm:flex-row justify-between items-center gap-4"
  
>
      {/* left side */}
<div className='flex items-start w-full sm:w-auto'>
  <div><Image src={job.logo}alt='company logo'
  width={60}
  height={60}/></div>
  <div>
    <p className='inline-block text-green-500 text-[16px] mb-2 px-2 bg-[#EBF5F4] rounded'>{job.time}</p>
    <h2 className='text-3xl font-semibold text-gray-900'>{job.title}</h2>
    <p className='text-[17px] mb-6 mt-2 text-gray-950'>{job.company}</p>
    <div className='flex flex-wrap gap-6 text-gray-600 text-[16px] font-semibold'>
      <div className='flex items-center gap-3'><LuBriefcaseBusiness className='text-teal-600 text-[24px]'/>{job.category}</div>
      <div className='flex items-center gap-3'><MdAccessTime className='text-teal-600 text-[24px]' />{job.type}</div>
      <div className='flex items-center gap-3'><LuWallet className='text-teal-600 text-[24px]'/>{job.salary}</div>
      <div className='flex items-center gap-3'><IoLocationOutline className='text-teal-600 text-[24px]'/>{job.location}</div>
    </div>
  </div>
</div>

{/* right side */}
<div className='flex flex-col justify-between items-end gap-4'>
  <button className='text-gray-500 mb-12 hover:text-gray-700'><BiBookmarkPlus size={26} /></button>
  <Link href={`/jobs/${job.id}`}>
  <CustomButton title='Job Details'/>
  </Link>
</div>

    </div>
      ))}
    </div>
    </div>
  )
}

export default HomeCard
