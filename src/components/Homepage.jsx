import React from 'react'
import H from '../assets/H.png'
import Thinkseglogo from '../assets/Thinkseg.png'
import Thinksegtext from '../assets/thinksegtext.png'
import Kipstonelogo from '../assets/Kipstone.png'
import Stefaninilogo from '../assets/stefaninilogo.png'
import Prismalogo from '../assets/prismalogo.png'
import Mobslogo from '../assets/mobslogo.png'
import Dentallogo from '../assets/Dentalofficelogo.png'

const Homepage = () => {
  return (
    <main>
      <div className='h-screen w-screen flex items-center justify-center bg-white'>
        <div className='relative'>
          <img src={H} alt="H" className='w-full h-full'/>
        </div>

        <div >
          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-poppins text-[40px] font-extrabold text-black'>Aplicações limpas e otimizadas</p>
          <p className='mt-[50px] font-poppins text-lg font-medium text-gray-800 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>Utilizando as mais recentes tecnologias do mercado.</p>
        </div>
      </div>

      <footer>
        <div className='mb-[36px]'>
          <p className="text-center font-poppins text-sm font-medium text-gray-800">Confiado por inovadores Globais</p>
        </div>

        <div className='flex justify-center items-center '>
            <a href="https://thinkseg.com" target='_blank'>
              <img src={Thinkseglogo} alt="ThinksegLogo" className='w-[50px] h-[50px] mx-[20px]'/>
            </a>
            <a href="https://thinkseg.com" target='_blank'>
              <img src={Thinksegtext} alt="ThinkSeg" className='w-[165px] h-[50px] mx-[20px]'/>
            </a>
            <a href="" target='_blank'>
              <img src={Kipstonelogo} alt="Kipstone" className='w-[50px] h-[50px] mx-[20px]'/>
            </a>
            <a href="https://www.dentaloffice.com.br" target='_blank'>
              <img src={Dentallogo} alt="DentalOffice" className='w-[135px] h-[50px] mx-[20px]'/>
            </a>
            <a href="" target='_blank'>
              <img src={Prismalogo} alt="Prisma" className='w-[50px] h-[50px] mx-[20px]'/>
            </a>
            <a href="https://stefanini.com/pt-br" target='_blank'>
              <img src={Stefaninilogo} alt="Stefanini" className='w-[165px] h-[50px] mx-[20px]'/>
            </a>
            <a href="" target='_blank'>
              <img src={Mobslogo} alt="Mobs" className='w-[165px] h-[50px] mx-[20px]'/>
            </a>
        </div>
      </footer>
    </main>
    
    
  )
}

export default Homepage