import React from 'react'
import Rocket from '../assets/RocketLaunch.png'
import Vector from '../assets/Vector.png'
import Browsers from '../assets/Browsers.png'
import Database from '../assets/Database.png'

const HowWeHelpYou = () => {
  return (
    <main className='mt-[100px] mb-[300px] '>
        <div>
            <h1 className='text-[#202020] text-center font-poppins text-[45px] font-semibold'> Como te ajudamos ? </h1>
        </div>
        <div className='flex justify-center items-center h-screen lg:m-auto '>
            <div className='flex flex-wrap justify-between mx-auto w-[1200px] h-[873px] relative lg:justify-center'>
              <div className='lg:flex-col'>
                <div className="relative top-0 left-0 flex items-center lg:flex lg:justify-center">
                  <img src={Rocket} alt="Foguete" className='w-[50px] h-[50px] '/>
                </div>

                <div>
                  <h1 className='font-poppins text-[21px] font-normal font-black ml-2 w-[313px] h-[62px] mt-[18px] lg:m-auto lg:text-center lg:mt-2 lg:font-semibold '>LANÇAMENTOS DIGITAIS COM QUALIDADE</h1>
                </div>
                  <p className='mt-[80px] w-[520px] h-[165px] font-semibold	lg:text-center lg:mt-2'>
                    Entregue uma solução que funcione. Ajudamos inovadores digitais - de startups a grandes empresas - a dar vida às 
                    suas ideias, lançar um negócio totalmente novo ou aumentar seu portfólio de soluções. Nossos especialistas colaboram com você para reunir 
                    rapidamente todos os requisitos obrigatórios, escolher a arquitetura certa e projetar a melhor experiência do usuário. E então, lance continuamente.
                  </p>

                  
              </div> 

              
           </div>
        </div>
    </main>
  )
}

export default HowWeHelpYou