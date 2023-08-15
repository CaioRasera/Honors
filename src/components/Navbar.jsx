import React from 'react'
import HonorsLogo from '../assets/HonorsLogo.svg'
import PhoneIcon from "../assets/Phoneicon.png"

const Navbar = () => {
  return (
    <nav className=' w-full bg-opacity-10 backdrop-blur backdrop-filter z-50 fixed top-0'>
      <div className='flex items-center justify-between '>
        <a href="#" className='mx-20 my-5 w-[250px] md:ml-8 sm:ml-6'> 
          <img className='
          hover:scale-95
          transform 
          origin-center 
          transition 
          duration-300
          ' src={HonorsLogo} alt="Honors Logo"/>
        </a>
        <div className='flex flex-wrap items-center justify-between'>
          <a href="https://web.whatsapp.com/send?phone=+551195901-5955" target='_blank' className='md:mr-14 sm:mr-12 mx-16 my-5 w-14 hover:scale-125 transform origin-center transition duration-300'>
            <img src={PhoneIcon} alt="Phone Icon" classNama='w-[50px] h-[50px] flex-shrink '/>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar