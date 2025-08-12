import React from 'react'
import NavList from './NavList'
import CustomButton from '../CustomButton'

const Header = () => {
  return (
    <div>
      <NavList/>
      <div className="flex justify-end items-center mr-6">
        <CustomButton
          title="Login"
          className="bg-transparent hover:bg-transparent transition-colors"
        />
        <CustomButton
          title="Register"
          className="bg-teal-600 text-white hover:bg-teal-700"
        />
      </div>
    </div>
  )
}

export default Header
