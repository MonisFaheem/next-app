'use client';
import React, { useState } from 'react'
import { FiSearch, FiMapPin } from "react-icons/fi";
// import ReactSlider from 'react-slider';
import * as Slider from "@radix-ui/react-slider";

import Tags from './Tags';
const JobSidebar = () => {
const [values, setValues] = useState([0, 9999])

const tagsData =[
  {id: 1, name: 'engineering'},
    {id: 2, name: 'design'},
      {id: 3, name: 'ui/ux'},
        {id: 4, name: 'marketing'},
          {id: 5, name: 'management'},
            {id: 6, name: 'soft'},
              {id: 7, name: 'construction'}
]

const categories =[
  'Commerce',
  'Telecommunication',
  'Hotels & Tourism',
  'Education',
  'Financial SErvices'
]

const jobType=[
  'Full Time',
  'Part Time',
  'Freelance',
  'Seasonal',
  'Fixed price'
]

const expLevel=[
  'No-Experience',
  'Fresher',
  'Intermediate',
  'Expert'
]

const datePost=[
  'All',
  'Last 24 Hours',
  'Last 7 Days',
'  last 30 Days'
]

  return (
    <>
    <div className='w-80 p-4 bg-[#EBF5F4] rounded-xl space-y-6 text-black'>
      <div>
        <h3 className='font-semibold mb-3 text-lg'>Search By Job Title</h3>
        <div className='flex items-center rounded-lg px-3 border-white bg-white'><FiSearch/>
        <input className='w-full p-2 outline-none' type="text"
        placeholder='job title or company' /></div>
      </div>
<div>
  <h3 className='font-semibold mb-3 text-lg'>Location</h3>
  <div className='flex items-center rounded-lg px-3 border-white bg-white'><FiMapPin/>
  <select className='w-full p-2 outline-none'> 
    <option className='' value="">Choose City</option>
    </select>
    </div>
</div>

<div>
  <h3 className='font-semibold mb-3 text-lg'>Category</h3>
  <div className='space-y-2'>
    {categories.map((cat, id)=>(
      <label className='flex items-center justify-between' key={id} htmlFor="">
        <div className='flex items-center gap-2'>
          <input className='w-4 h-4 rounded-md border-gray-400 border-2 appearance-none checked:bg-teal-600 checked:border-teal-600' type="checkbox" />
          <span className='text-lg'>{cat}</span>
          
        </div>
        <span className='text-sm bg-gray-100 px-3 py- rounded-full'>10</span>
      </label>
    ))}
  </div>
</div>

<div>
  <h3 className='font-semibold mb-3 text-lg'>Job Type</h3>
  <div className='space-y-2'>
    {jobType.map((job,id)=>(
<label className='flex items-center justify-between' key={id} htmlFor="">
  <div className='flex items-center gap-2'>
    <input className='w-4 h-4 rounded-md border-gray-400 border-2 appearance-none checked:bg-teal-600 checked:border-teal-600' type="checkbox" />
    <span className='text-lg'>{job}</span>
  </div>
  <span className='text-sm bg-gray-100 px-3 py- rounded-full '>10</span>
</label>
    ))}
  </div>
</div>

<div>
  <h3 className='font-semibold mb-3 text-lg'>Experience Level</h3>
  <div className='space-y-2'>{expLevel.map((exp, id)=>(
    <label className='flex items-center justify-between' key={id} htmlFor="">
      <div className='flex items-center gap-2 '>
         <input className='w-4 h-4 rounded-md border-gray-400 border-2 appearance-none checked:bg-teal-600 checked:border-teal-600' type="checkbox" />
      <span className='text-lg'>{exp}</span></div>
      <span className='text-sm bg-gray-100 px-3 py- rounded-full'>10</span>
    </label>
  ))}</div>
</div>

<div>
  <h3 className='font-semibold mb-3 text-lg'>Date Posted</h3>
  <div className='space-y-2'>
    {datePost.map((date,id)=>(
      <label className='flex items-center justify-between' key={id} htmlFor="">
        <div className='flex items-center gap-2'>
          <input className='w-4 h-4 rounded-md border-gray-400 border-2 appearance-none checked:bg-teal-600 checked:border-teal-600' type="checkbox"/>
        <span className='text-lg'>{date}</span></div>
        <span className='text-sm bg-gray-100 px-3 py- rounded-full'>10</span>
      </label>
    ))}
  </div>
</div>

<div>
  <h3 className='font-semibold mb-3 text-lg'>Salary</h3>
<Slider.Root
  className="relative flex items-center w-full h-5"
  defaultValue={[0]}
  max={100}
  step={1}
>
  <Slider.Track className="bg-gray-200 relative flex-1 h-1 rounded">
    <Slider.Range className="absolute bg-blue-500 h-1 rounded" />
  </Slider.Track>
  <Slider.Thumb className="block w-4 h-4 bg-blue-500 rounded-full" />
</Slider.Root>

  <div>
    <p className=' text-[1rem]'>Salary: ${values[0]} - ${values[1]}</p>
    </div>
</div>
<div>
  <h3 className='font-semibold mb-3 text-lg'>
    Tags
  </h3>
  <div><Tags tags={tagsData}/></div>
</div>

    </div>
<div className='w-80 h-96 bg-black px-4 mt-4 rounded-xl'>
<h1 className='font-bold text-3xl pt-3'>WE ARE HIRING</h1>
<h2 className='font-semibold text-2xl pt-2'>Apply Today!</h2>
</div>

    </>
  )
}

export default JobSidebar
