import React from 'react'
import HonorsLogo from '../assets/honorlogo.png'
import PhoneIcon from "../assets/Phoneicon.png"

const Navbar = () => {
  return (
    <nav className='h-[124px] w-full bg-blur fixed top-0'>
      <div className='flex items-center justify-between'>
        <a href="#" className='mx-20 my-5 w-[250px]'> 
          <img src={HonorsLogo} alt="Honors Logo"/>
        </a>
        <div className='flex flex-wrap items-center justify-between'>
          <a href="#" className='mx-16 my-5 w-14'>
            <img src={PhoneIcon} alt="Phone Icon" classNama='w-[50px] h-[50px] flex-shrink'/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar