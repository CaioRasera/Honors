import React from 'react'
import Rocket from '../assets/RocketLaunch.png'
import Vector from '../assets/Vector.png'
import Browsers from '../assets/Browsers.png'
import Database from '../assets/Database.png'

const HowWeHelpYou = () => {
  return (
    <main className='mt-[100px]'>
        <div>
            <h1 className='text-[#202020] text-center font-poppins text-[45px] font-semibold'> Como te ajudamos ? </h1>
        </div>
        <div className='flex justify-center items-center h-screen'>
          <div className='flex flex-wrap justify-between mx-auto w-[1200px] h-[873px] relative'>
              <div>
                <div className="absolute top-0 left-0 flex items-center">
                  <img src={Rocket} alt="Foguete" className='w-[50px] h-[50px]'/>
                  <h1 className='font-poppins text-[21px] font-normal font-black ml-[8px] w-[313px] h-[62px] mt-[18px]'>LANÇAMENTOS DIGITAIS COM QUALIDADE</h1>
                </div>
                  <p className='mt-[80px] w-[520px] h-[165px] font-semibold	'>Entregue uma solução que funcione. Ajudamos inovadores digitais - de startups a grandes empresas - a dar vida às 
                  suas ideias, lançar um negócio totalmente novo ou aumentar seu portfólio de soluções. Nossos especialistas colaboram com você para reunir 
                  rapidamente todos os requisitos obrigatórios, escolher a arquitetura certa e projetar a melhor experiência do usuário. E então, lance continuamente.
                  </p>
              </div>

              <div>
                <div className="absolute top-0 right-0 flex items-center">
                  <img src={Vector} alt="Vector" className='w-[50px] h-[50px]'/>
                  <h1 className='font-poppins text-[21px] font-normal font-black ml-[8px] w-[313px] h-[62px] mt-[18px]'>Cumpra prazos dentro de seus produtos digitais</h1>
                </div>
                  <p className='mt-[80px] w-[520px] h-[165px] font-semibold'>  
                  Pratique uma metodologia que funcione. Quando surgem oportunidades de negócios, nossos clientes contam com nossas equipes disciplinadas 
                  trabalhando e colaborando com seus especialistas de domínio - feito da maneira certa. Métricas ágeis e execução iterativa são o molho secreto 
                  de nossas equipes que trabalham com pessoas de negócios que precisam de respostas. Apaixone-se pela previsibilidade, colaboração, redução de 
                  ruído e lançamentos novamente.
                  </p>
              </div>

              <div>
                <div className="absolute bottom-0 left-0 flex items-center">
                  <img src={Rocket} alt="Foguete" className='w-[50px] h-[50px]'/>
                  <h1 className='font-poppins text-[21px] font-normal font-black w-[313px] h-[62px] mr-[60px] '>LANÇAMENTOS DIGITAIS COM QUALIDADE</h1>
                </div>
                  <p className='mt-[50px] w-[520px] h-[165px]'>  Entregue uma solução que funcione. Ajudamos inovadores digitais - de startups a grandes empresas - a dar vida às 
                  suas ideias, lançar um negócio totalmente novo ou aumentar seu portfólio de soluções. Nossos especialistas colaboram com você para reunir 
                  rapidamente todos os requisitos obrigatórios, escolher a arquitetura certa e projetar a melhor experiência do usuário. E então, lance continuamente.</p>
              </div>

              
              <div>
                <div className="absolute bottom-0 right-0 flex items-center">
                  <img src={Rocket} alt="Foguete" className='w-[50px] h-[50px]'/>
                  <h1 className='font-poppins text-[21px] font-normal font-black w-[313px] h-[62px] mr-[60px] '>LANÇAMENTOS DIGITAIS COM QUALIDADE</h1>
                </div>
                  <p className='mt-[50px] w-[520px] h-[165px]'>  Entregue uma solução que funcione. Ajudamos inovadores digitais - de startups a grandes empresas - a dar vida às 
                  suas ideias, lançar um negócio totalmente novo ou aumentar seu portfólio de soluções. Nossos especialistas colaboram com você para reunir 
                  rapidamente todos os requisitos obrigatórios, escolher a arquitetura certa e projetar a melhor experiência do usuário. E então, lance continuamente.</p>
              </div>

          </div>
        </div>
    </main>
  )
}

export default HowWeHelpYou