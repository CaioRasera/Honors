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
            h-screen
            w-screen
            bg-[#202020]
        '  
        >
            <h1
                className='
                text-center 
                text-2xl 
                m-10 
                md:text-3xl md:mb-14 md:mt-24
                lg:text-4xl
                pt-[150px]
                text-white
            '
                style={{ fontFamily: 'poppins' }}
            >O que fazemos ?
            </h1>
            <div className='
            md:flex 
            justify-evenly 
            md:mb-44
            lg:mb-24
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
                            md:text-xl md:leading-[100px]
                            


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
                            md:text-xl md:leading-[100px]
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
            <div className='m-auto lg:mt-[200px]'>
                <h3 className='text-white text-center text-[15px] mb-[15px] font-[poppins] lg:text-xl lg:mb-24 '>
                    Usando tecnologias modernas
                </h3>
                <div className='
                    flex flex-wrap justify-center
                '>
                    <a href="https://nestjs.com/" target='_blank' className='p-1 w-28
                    lg:w-52 md:w-40'>
                        <img src={NestJsImg} alt="Nest Js Img" />
                    </a>
                    <a href="https://react.dev/" target='_blank' className='p-1 w-28
                    lg:w-52 md:w-40'>
                        <img src={ReactJsImg} alt="React Js Img" />
                    </a>
                    <a href="https://www.typescriptlang.org/" target='_blank' className='p-1 w-28 lg:w-52 md:w-40'>
                        <img src={TsImg} alt="Typescript Img" />
                    </a>
                    <a href="https://www.java.com/pt-BR/" target='_blank' className='p-1 w-28 lg:w-52 md:w-40'>
                        <img src={JavaImg} alt="Java Img" />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default WhatWeDo