import React from 'react'
import Rocket from '../assets/RocketLaunch.png'
import Vector from '../assets/Vector.png'
import Browsers from '../assets/Browsers.png'
import Database from '../assets/Database.png'

const HowWeHelpYou = () => {
  return (
    <main className='mt-[100px] '>
        <div>
            <h1 className='text-[#202020] text-center font-poppins text-[45px] font-semibold'> Como te ajudamos ? </h1>
        </div>
        <div className='flex justify-center items-center h-screen'>
          <div className='flex flex-wrap justify-between mx-auto w-[1200px] h-[873px] lg:w-screen lg:h-screen relative'>
              <div>
                <div className="absolute top-0 left-0 flex items-center">
                  <img src={Rocket} alt="Foguete" className='w-[50px] h-[50px] '/>
                  <h1 className='font-poppins text-[21px] font-normal font-black ml-2 w-[313px] h-[62px] mt-[18px]'>LANÇAMENTOS DIGITAIS COM QUALIDADE</h1>
                </div>
                  <p className='mt-[80px] w-[520px] h-[165px] font-semibold	'>
                    Entregue uma solução que funcione. Ajudamos inovadores digitais - de startups a grandes empresas - a dar vida às 
                    suas ideias, lançar um negócio totalmente novo ou aumentar seu portfólio de soluções. Nossos especialistas colaboram com você para reunir 
                    rapidamente todos os requisitos obrigatórios, escolher a arquitetura certa e projetar a melhor experiência do usuário. E então, lance continuamente.
                  </p>
              </div>

              <div>
                <div className="absolute top-0 flex items-center ">
                  <img src={Vector} alt="Vector" className='w-[50px] h-[50px]'/>
                  <h1 className='font-poppins text-[21px] font-normal font-black ml-4 w-[313px] h-[62px] mt-[18px] '>Cumpra prazos dentro de seus produtos digitais</h1>
                </div>
                  <p className='mt-[80px] w-[520px] h-[165px] font-semibold'>  
                    Pratique uma metodologia que funcione. Quando surgem oportunidades de negócios, nossos clientes contam com nossas equipes disciplinadas 
                    trabalhando e colaborando com seus especialistas de domínio - feito da maneira certa. Métricas ágeis e execução iterativa são o molho secreto 
                    de nossas equipes que trabalham com pessoas de negócios que precisam de respostas. Apaixone-se pela previsibilidade, colaboração, redução de 
                    ruído e lançamentos novamente.
                  </p>
              </div>

              <div>
                <div className="absolute left-0 flex items-center">
                  <img src={Browsers} alt="Browsers" className='w-[50px] h-[50px]'/>
                  <h1 className='font-poppins text-[21px] font-normal font-black ml-4 w-[313px] h-[62px] mt-[18px]'>Aumente a qualidade para a confiança de seus usuários</h1>
                </div>
                  <p className='mt-[80px] w-[520px] h-[165px] font-semibold'>
                    Entregue um código que funcione. Sim, nós sabemos disso. A cultura do "deixe bater" estava em toda parte, e é difícil evitá-la. Ajudamos nossos clientes a 
                    consertá-los com práticas e valores extremos de programação, aplicando também a mudança de paradigmas na programação de computadores para construir bases 
                    de código resilientes e saudáveis. Não há necessidade de quebrar a paixão de seus usuários por seu produto quando eles mais precisam de você.
                  </p>
              </div>

              
              <div>
                <div className="absolute flex items-center">
                  <img src={Database} alt="Database" className='w-[50px] h-[50px]'/>
                  <h1 className='font-poppins text-[21px] font-normal font-black ml-4 w-[330px] h-[62px] mt-[18px]'>Melhore sua arquitetura e dimensione mais rapidamente</h1>
                </div>
                  <p className='mt-[80px] w-[520px] h-[165px] font-semibold'>
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