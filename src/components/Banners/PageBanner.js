import React from 'react'

const PageBanner = ({title}) => {
  return (
    <div className='bg-black justify-center items-center flex h-70'>
      <h1 className='font-semibold text-6xl'>{title}</h1>
    </div>
  )
}

export default PageBanner
