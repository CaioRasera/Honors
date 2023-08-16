
import React from 'react'
import HonorsLogo from '../assets/honorslogo.jpg'
import PhoneIcon from "../assets/Phoneicon.png"


const Navbar = () => {

  

  return (
    <nav className='
      w-full 
      bg-opacity-10 
      backdrop-blur 
      backdrop-filter 
      z-50 
      fixed 
      top-0
    '>
      <div className='
        lg:flex 
        lg:items-center 
        lg:justify-between 
        md:flex 
        md:items-center 
        md:justify-between 
        sm:flex 
        sm:items-center 
        sm:justify-between 
      '>
        <a href="#" className='
          lg:mx-20 
          lg:my-5 
          lg:w-[250px] 
          md:ml-8 
          sm:ml-6
        '> 
          <img className='
            hover:scale-95
            transform 
            origin-center 
            transition 
            duration-300
          ' src={HonorsLogo} alt="Honors Logo"/>
        </a>
        <div className='
          lg:flex 
          lg:flex-wrap 
          lg:items-center 
          lg:justify-between
        '>
          <a href="https://web.whatsapp.com/send?phone=+551195901-5955" target='_blank' className='
            md:mr-14 
            sm:mr-12 
            lg:mx-16 
            lg:my-5 
            lg:w-14 
            hover:scale-125 
            transform 
            origin-center 
            transition 
            duration-300
          '>
            <img src={PhoneIcon} alt="Phone Icon" classNama='
              w-[50px] 
              h-[50px] 
              flex-shrink 
            '/>

          </a>
        </div>
      </div>
    </nav>
  )
}
export default Navbar