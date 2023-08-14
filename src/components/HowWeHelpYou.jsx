import React from 'react'
import Rocket from '../assets/RocketLaunch.png'
import Vector from '../assets/Vector.png'
import Browsers from '../assets/Browsers.png'
import Database from '../assets/Database.png'

const HowWeHelpYou = () => {
  return (
    <main className='mt-[100px] h-[1400px] xl:h-[1000px] mb-[100px] lg:mb-[100px]'>
    <div>
        <h1 className='text-[#202020] text-center font-poppins text-[45px] font-semibold'> Como te ajudamos ? </h1>
    </div>
    <div className='
      flex 
      justify-center 
      items-center 
      h-screen 
      lg:m-auto 
      md:m-auto 
      sm:m-auto
    '>
      <div className='flex flex-wrap justify-between mx-auto w-[1200px] h-[873px] relative lg:justify-center md:justify-center sm:justify-center'>

        <div classname="
          lg:flex-col 
          md:flex-col 
          sm:flex-col
        ">
          <div className="
            absolute 
            flex 
            items-center 
            lg:flex 
            lg:justify-center 
            lg:relative 
            md:flex 
            md:justify-center 
            md:relative
            sm:flex
            sm:justify-center
            sm:relative
          ">
            <img src={Rocket} alt="Rocket" className='w-[50px] h-[50px]'/>
          </div>

          <div className=*ml-10 lg:flex lg:justify-center lg:relative md:flex md:justify-center md:relative sm:flex sm:justify-center sm:relative'>        
            <h1 className='font-poppins text-[21px] font-normal font-black ml-4 w-[330px] h-[62px] mt-[18px]'>LANÇAMENTOS DIGITAIS COM QUALIDADE</h1>
          </div>

            <p className='mt-[15px] w-[520px] h-[165px] font-semibold lg:text-center lg:mt-2 lg:mb-[55px] md:text-center md:mt-2 md:mb-[55px] sm:text-center sm:mt-2 sm:mb-[55px]'>
              Crie uma arquitetura que funcione. Uma arquitetura escalável é essencial para permitir que você cultive uma base de usuários crescente. Quanto 
              maior o número de transações, mais robusta deve ser a arquitetura. Trabalhamos com nossos clientes globais dividindo seus monólitos (e equipes) 
              em microsserviços, aplicando novos paradigmas, incluindo arquiteturas orientadas a eventos (EDA) e ferramentas como Elixir e Phoenix.
            </p>
          
        </div>

        <div classname="lg:flex-col md:flex-col sm:flex-col">
          <div className="absolute top-0 flex items-center lg:flex lg:justify-center lg:relative md:flex md:justify-center md:relative sm:flex sm:justify-center sm:relative">
            <img src={Vector} alt="Vector" className='w-[50px] h-[50px]'/>
          </div>
          
          <div className='ml-10 lg:flex lg:justify-center lg:relative md:flex md:justify-center md:relative sm:flex sm:justify-center sm:relative'>
            <h1 className='font-poppins text-[21px] font-normal font-black ml-4 w-[313px] h-[62px] mt-[18px] '>Cumpra prazos dentro de seus produtos digitais</h1>
          </div>

            <p className='mt-[15px] w-[520px] h-[165px] font-semibold lg:text-center lg:mt-2 lg:mb-[55px] md:text-center md:mt-2 md:mb-[55px] sm:text-center sm:mt-2 sm:mb-[55px]'>  
              Pratique uma metodologia que funcione. Quando surgem oportunidades de negócios, nossos clientes contam com nossas equipes disciplinadas 
              trabalhando e colaborando com seus especialistas de domínio - feito da maneira certa. Métricas ágeis e execução iterativa são o molho secreto 
              de nossas equipes que trabalham com pessoas de negócios que precisam de respostas. Apaixone-se pela previsibilidade, colaboração, redução de 
              ruído e lançamentos novamente.
            </p>

          </div>

          <div classname="lg:flex-col md:flex-col sm:flex-col">
            <div className="absolute left-0 flex items-center lg:flex lg:justify-center lg:relative md:flex md:justify-center md:relative sm:flex sm:justify-center sm:relative">
              <img src={Browsers} alt="Browsers" className='w-[50px] h-[50px]'/>
            </div>

            <div className='ml-10 lg:flex lg:justify-center lg:relative md:flex md:justify-center md:relative sm:flex sm:justify-center sm:relative'>
              <h1 className='font-poppins text-[21px] font-normal font-black ml-4 w-[313px] h-[62px] mt-[18px]'>Aumente a qualidade para a confiança de seus usuários</h1>
            </div>

              <p className='mt-[15px] w-[520px] h-[165px] font-semibold lg:text-center lg:mt-2 lg:mb-[55px] md:text-center md:mt-2 md:mb-[55px] sm:text-center sm:mt-2 sm:mb-[55px]'>
                Entregue um código que funcione. Sim, nós sabemos disso. A cultura do "deixe bater" estava em toda parte, e é difícil evitá-la. Ajudamos nossos clientes a 
                consertá-los com práticas e valores extremos de programação, aplicando também a mudança de paradigmas na programação de computadores para construir bases 
                de código resilientes e saudáveis. Não há necessidade de quebrar a paixão de seus usuários por seu produto quando eles mais precisam de você.
              </p>

          </div>

          <div classname="lg:flex-col md:flex-col sm:flex-col">
            <div className="absolute flex items-center lg:flex lg:justify-center lg:relative md:flex md:justify-center md:relative sm:flex sm:justify-center sm:relative">
              <img src={Database} alt="Database" className='w-[50px] h-[50px]'/>
            </div>

            <div className='ml-10 lg:flex lg:justify-center lg:relative md:flex md:justify-center md:relative sm:flex sm:justify-center sm:relative '>               
              <h1 className='font-poppins text-[21px] font-normal font-black ml-4 w-[330px] h-[62px] mt-[18px] '>Melhore sua arquitetura e dimensione mais rapidamente</h1>
            </div>

              <p className='mt-[15px] w-[520px] h-[165px] font-semibold lg:text-center lg:mt-2 lg:mb-[55px] md:text-center md:mt-2 md:mb-[55px] sm:text-center sm:mt-2 sm:mb-[55px]'>
                Crie uma arquitetura que funcione. Uma arquitetura escalável é essencial para permitir que você cultive uma base de usuários crescente. Quanto 
                maior o número de transações, mais robusta deve ser a arquitetura. Trabalhamos com nossos clientes globais dividindo seus monólitos (e equipes) 
                em microsserviços, aplicando novos paradigmas, incluindo arquiteturas orientadas a eventos (EDA) e ferramentas como Elixir e Phoenix.
              </p>
          
          </div>
          
          
          
        </div>
      </div>
    </main>
  )
}

export default HowWeHelpYou