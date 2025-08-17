'use client';
import React from 'react'
import { useState } from 'react';
import { IoBagHandle } from "react-icons/io5";
import Brand from '../Brand';
import CustomButton from '../CustomButton';

const HomeBanner = () => {
const stats=[
  {icon: <IoBagHandle/>, number: '12333',  label: 'Jobs'},
  {icon: <IoBagHandle/>, number: '12333',  label: 'Jobs'},
  {icon: <IoBagHandle/>, number: '12333',  label: 'Jobs'}

]


  const [jobTitle, setJobTitle] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  return (
    <section className='w-full flex flex-col items-center justify-center mt-24'>
      <h1 className='font-extrabold  text-6xl mb-5'>Find Your Dream Job Today!</h1>
      <p className='text-lg max-w-2xl mb-4'>connecting talent with opportunity: Your Gateaway tp Career Success.</p>
{/* <div className='flex items-center w-full bg-white rounded-full max-w-4xl mx-auto overflow-hidden'>
  <input className='flex-1 px-3 py-4 text-gray-800 focus:outline-none' type="text"
  placeholder='Job title' />
   <div className="w-px h-8 bg-gray-800" ></div>

  <select  className="px-4 py-3 text-gray-700 bg-transparent focus:outline-none"
   name="" id=""></select>
  <select name="" id=""
  className="px-4 py-3 text-gray-700 bg-transparent focus:outline-none"></select>
  <button>ok</button>
</div> */}

<div className="flex items-center bg-white rounded-2xl shadow-md overflow-hidden max-w-4xl mx-auto mt-5">
      {/* Job Title Input */}
      <input
        type="text"
        placeholder="Job Title or Company"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className=" text-center px-4 py-3 text-gray-700 focus:outline-none"
      />

      {/* Divider */}
      <div className="w-px h-8 bg-gray-300" />

      {/* Location Select */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-3 text-gray-700 bg-transparent focus:outline-none"
      >
        <option value="">Select Location</option>
        <option value="ny">New York</option>
        <option value="sf">San Francisco</option>
      </select>

      {/* Divider */}
      <div className="w-px h-8 bg-gray-300 mx-2" />

      {/* Category Select */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-3 text-gray-700 bg-transparent focus:outline-none mr-2"
      >
        <option value="">Select Category</option>
        <option value="dev">Developer</option>
        <option value="design">Designer</option> 
      </select>

      {/* Search Button */}
      <CustomButton
      title="Search Job"
        icon = {<svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z" />
        </svg>
        }
        className="bg-teal-600 hover:bg-teal-700 text-white px-6 h-full rounded-r-2xl rounded-l-none py-6 flex items-center gap-2"
      />
    </div>
<div className='py-8 mt-20'>
  <div className='max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-10'>
    {stats.map((stat, index)=>(
      <div className='flex items-center gap-4' key={index}>
        <div className='bg-teal-600 p-4 rounded-full flex items-center justify-center'>{stat.icon}</div>
        <div>
          <h3 className='text-2xl font-semibold'>{stat.number}</h3>
          <p>{stat.label}</p>
          </div>
      </div>
    ))}
  </div>
</div>
<Brand/>
    </section>
  )
}

export default HomeBanner
