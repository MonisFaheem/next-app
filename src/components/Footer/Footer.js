import React from 'react'
import CustomButton from '../CustomButton'

const Footer = () => {
  return (
    <footer className='py-5 text-white bg-black'>
      <div className='mt-5 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>
          <div>
            <h5 className='mb-4 font-bold text-lg'>Job</h5>
            <p className='font-bold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, explicabo tenetur.</p>
          </div>
          <div>
            <h5 className='mb-4 font-bold text-lg'>Company</h5>
            <ul>
              <li className='mb-2'>About Us</li>
              <li className='mb-2'>Our Team</li>
              <li className='mb-2'>Partners</li>
              <li className='mb-2'>For Candidates</li>
              <li>For Employers</li>
            </ul>
          </div>
          <div>
            <h5 className='mb-4 font-bold text-lg'>Job Categories</h5>
            <ul>
              <li className='mb-2'>Telecommunication</li>
              <li className='mb-2'>Hotels & Tourism</li>
              <li className='mb-2'>Construction</li>
              <li className='mb-2'>Education</li>
              <li className='mb-2'>Financial Services</li>
            </ul>
          </div>
          <div>
            <h5 className='mb-4 font-bold text-lg'>Newsletter</h5>
            <p className='text-sm mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, maiores.</p>
            <div className='flex flex-col gap-3 w-full'>
            <input type="text"
            placeholder='Email Address' 
            className='flex-1 border-1 rounded-lg w-full px-4 py-3'/>
            <CustomButton title='Subscribe Now'
            className='w-full py-3'/>
            </div>
          </div>
        </div>
         <div className='flex justify-between items-center mt-8 pt-4'>
        <ul className='flex gap-6'>
        <li className='hover:underline cursor-pointer'>Privacy Policy</li>
        <li className='hover:underline cursor-pointer'>Terms & Conditions</li>
        </ul>
      </div>
      </div>
     
    </footer>
  )
}

export default Footer