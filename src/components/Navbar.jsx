import React from 'react'
import ImageLogo from '../assets/honorlogo.png'
import PhoneIcon from "../assets/Phoneicon.png"

const Navbar = () => {
  return (
    <nav className='h-[100vh] bg-white border-gray-200 dark:bg=gray-900'>
      <div className='flex flex-wrap items-center justify-between ml-[90px] mr-[74px]'>
        <a href="#" className='flex items-center h-[85px] w-[344px]'> 
          <img src={ImageLogo} alt="Honors Logo"/>
        </a>
        <div className='flex flex-wrap items-center justify-between	h-[70px] w-[70px]'>
          <a href="#">
            <img src={PhoneIcon} alt="Phone Icon" classNama='w-[50px] h-[50px] flex-shrink'/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar