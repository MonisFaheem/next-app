import React from 'react'
import NavList from './NavList'
import CustomButton from '../CustomButton'

const Header = () => {
  return (
    <header className='absolute top-0 left-0 w-full z-30'>
      <NavList/>
    </header>
  )
}

export default Header
