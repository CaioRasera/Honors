import React from 'react'
import LogoHonors from '../assets/honorsLogoWhite.png'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='bg-[#202020] w-screen h-[295px] py-8 mt-[600px] md:mt-[250px] lg:mt-[350px]'>
    <div className='container mx-auto flex justify-between items-center'>
      <div>
        <img src={LogoHonors} alt="Logo Honors" className='mt-[30px]' />
        <div className='ml-5 mt-2'>
          <div className="text-[#979797] font-Poppins text-base font-medium leading-normal">HONORS COMERCIO E TECNOLOGIA LTDA</div>
          <div className="text-[#979797] font-Poppins text-base font-medium leading-normal">CNPJ: 18.000.946/0001-13x</div>
          <div className="text-[#979797] font-Poppins text-base font-medium leading-normal">© 2023 todos os direitos reservados</div>
        </div>
      </div>

    <ul className="flex space-x-4 text-xl lg:m-12 md:m-10 sm:m-6">
        <li className="flex items-center ">
            <a href="#" className="text-white flex items-center hover:text-purple-600">
                <AiOutlineInstagram className="mr-2 " />
                @Honors
            </a>
        </li>
        <li className="flex items-center">
            <a href="#" className="text-white flex items-center hover:text-purple-600">
                <AiFillGithub className="mr-2" />
                Honors
            </a>
        </li>
    </ul> 

    </div>
  </footer>  
  )
}

export default Footer