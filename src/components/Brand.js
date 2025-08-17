'use client';
import React from 'react'
import Image from 'next/image'

const Brand = () => {
const brands =[
  {img: '/images/logo (1).png', alt: 'image1', width: '100', height: '80'},
    {img: '/images/logo (2).png', alt: 'image1', width: '100', height: '80'},
      {img: '/images/logo (3).png', alt: 'image1', width: '100', height: '80'},
        {img: '/images/logo (4).png', alt: 'image1', width: '100', height: '80'},
          {img: '/images/logo (5).png', alt: 'image1', width: '100', height: '80'},
]

  return (
    <div className='w-full overflow-hidden mt-20 justify-center flex mx-auto bg-black h-20'>
      <div className='flex animate-scroll gap-12'>
        {[...brands, ...brands].map((brand, i)=>(
          <Image
          alt={brand.alt}
          key={i}
          src={brand.img}
          width={brand.width}
          height={brand.height}
          className='object-contain'/>
        ))}
      </div>
    </div>
  )
}

export default Brand
