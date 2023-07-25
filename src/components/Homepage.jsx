import React from 'react'
import H from '../assets/H.png'
import Thinkseglogo from '../assets/Thinkseg.png'
import Thinksegtext from '../assets/thinksegtext.png'

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

        <div className='inline-flex h-30 justify-center items-center space-x-20 flex-shrink-0'>
            <img src={Thinkseglogo} alt="Logo" className='w-[50px] h-[50px]'/>
            <img src={Thinksegtext} alt="ThinkSeg" className='w-auto h-[50px]'/>
        </div>
      </footer>
    </main>
    
    
  )
}

export default Homepage