import React from 'react'
import Image from 'next/image'

const TopCompany = () => {
  
const companies =[
  {
    id: 1,
    logo: '/icons/Icon.png',
    company: 'Instagram',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum.',
    jobs: 15,
  },
  {
    id: 2,
    logo: '/icons/Icon.png',
    company: 'Tesla',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum.',
    jobs: 15,
  },
  {
    id: 3,
    logo: '/icons/Icon.png',
    company: 'McDonalds',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum.',
    jobs: 15,
  },
  {
    id: 4,
    logo: '/icons/Icon.png',
    company: 'Apple',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, harum.',
    jobs: 15,
  }
]

  return (
    <div className='bg-[#EBF5F4] pb-25'>
      <div className='text-black text-center pt-10'>
      <h1 className='font-bold text-4xl pb-3'>Top Company</h1>
      <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, explicabo?</p>
      </div>
      <div className='max-w-7xl mx-auto px-4 mt-6'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
          {companies.map((company,id)=>(
            <div key={id} className='bg-white rounded-2xl p-8 min-h-[300px] shadow-md flex flex-col items-center justify-center hover:shadow-lg transition w-full'>
              <div className='bg-black h-14 w-14 rounded-lg justify-center items-center flex'>
              <Image
              className=''
              src={company.logo}
              width={40}
              height={40}
              alt={company.company}
              />
              </div>
              <h2 className='text-black font-bold mt-2 mb-3'>{company.company}</h2>
              <p className='text-black text-center'>{company.description}</p>
              <span className="bg-[#E6F2F0] text-teal-700 text-sm px-3 py-1 rounded-full mt-5">
              {company.jobs} jobs
            </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TopCompany
