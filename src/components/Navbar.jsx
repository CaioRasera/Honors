import React from 'react'
import Image from '../assets/honorlogo.png'

const Navbar = () => {
  return (
    <nav className='bg-white border-gray-200 dark:bg=gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href="#" className='flex items-center'> 
          <img src={Image} alt="Honors Logo" className='h-8 mr-3'/>
        </a>
        <h1>Olá</h1>
      </div>
    </nav>
  )
}

export default Navbar