import React from 'react'
import Navbar from './Navbar'
import HonorsLogo from '../assets/honorsLogoWhite.png'
import PhoneIcon from '../assets/phoneIconWhite.png'
import NestJsImg from '../assets/NestJsImg.png'
import ReactJsImg from '../assets/ReactJsImg.png'
import TsImg from '../assets/TsImg.png'
import JavaImg from '../assets/JavaImg.png'
import '../assets/css/fonts.css'


function WhatWeDo() {
    return (
        <main className='
            h-[100vh]
            w-[100vw]
            bg-[#202020]
        '  
        >
    
            <h1
                className='
                text-center 
                text-2xl 
                m-20 
                pt-[150px]
                md:text-4xl md:m-32
                text-white
            '
                style={{ fontFamily: 'poppins' }}
            >O que fazemos ?
            </h1>
            <div className='
            md:flex 
            justify-evenly 
            mb-10
            md:mb-48
            text-center
            grid
            grid-rows
            '>
                <div className='
                    w-[350px]
                    h-[220px]
                    gap-[30px]
                '>
                    <div className='
                    border-[#38108C]
                    border-2
                    inline-block
                    w-[79px]
                    md:w-[228.9px]
                    rounded-[12px]'/>
                    <div>
                        <h2 className='
                            font-bold text-[20px] leading-[50px] w-[100%] text-white
                            md:text-3xl md:leading-[100px]
                            


                        ' style={{ fontFamily: 'poppins' }}>
                            Do design ao código
                        </h2>
                        <p style={{ fontFamily: 'poppins' }} className='text-center text-[12px] w-[70%]  m-auto text-white
                        md:text-[20px] md:w-[100%]
                        '>
                            Ajudamos você a construir uma aplicação com a sua cara de ponta a ponta
                        </p>
                    </div>
                </div>

                <div className='w-[350px] h-[220px]'>
                    <div className='
                    border-[#38108C]
                    border-2
                    inline-block
                    w-[79px]
                    md:w-[228.9px]
                    rounded-[12px]'/>

                    <div>
                    <h2 className='
                            font-bold text-[20px] leading-[50px] w-[100%] text-white
                            md:text-3xl md:leading-[100px]
                        ' style={{ fontFamily: 'poppins' }}>
                           Upgrade
                        </h2>
                        <p style={{ fontFamily: 'poppins' }} className='text-center text-[12px] w-[70%] m-auto my-0 text-white
                        md:text-[20px] md:w-[100%]
                        '>
                            Ajudamos você a construir uma aplicação com a sua cara de ponta a ponta
                        </p>
                    </div>
                </div>

            </div>
            <div className='m-7 mt-28'>
                <h3 className='text-white text-center text-[12px] mb-[10px] font-[poppins]'>
                    Usando tecnologias modernas
                </h3>
                <div className='
                    flex justify-center
                '>
                    <a href="https://nestjs.com/" target='_blank' className='m-[35px'>
                        <img src={NestJsImg} alt="" />
                    </a>
                    <a href="https://react.dev/" target='_blank' className='m-[35px'>
                        <img src={ReactJsImg} alt="" />
                    </a>
                    <a href="https://www.typescriptlang.org/" target='_blank' className='m-[35px'>
                        <img src={TsImg} alt="" />
                    </a>
                    <a href="https://www.java.com/pt-BR/" target='_blank' className='m-[35px'>
                        <img src={JavaImg} alt="" />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default WhatWeDo