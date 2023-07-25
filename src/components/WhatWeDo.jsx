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
        '>
            <div className="
            header 
            flex 
            justify-between 
            ">
                <a href="" className='
                mx-10 
                my-5 
                w-28'>
                    <img src={HonorsLogo} alt="" />
                </a>
                <a href="" className='
                mx-10 
                my-5 
                w-7'>
                    <img src={PhoneIcon} alt="" />
                </a>
            </div>
            <h1
                className='
                text-center 
                font-extrabold 
                text-xl 
                m-20 
                md:text-2xl 
                text-white
            '
                style={{ fontFamily: 'poppins' }}
            >O que fazemos ?
            </h1>
            <div className='
            md:flex 
            justify-evenly 
            m-35 
            mb-24
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
                            font-bold text-[14px] leading-[100px] w-[100%] text-white
                            md:text-3xl

                        ' style={{ fontFamily: 'poppins' }}>
                            Do design ao código
                        </h2>
                        <p style={{ fontFamily: 'poppins' }} className='text-center text-[12px] w-[75%]  m-auto text-white'>
                            Ajudamos você a construir uma aplicação com a sua cara de ponta a ponta
                        </p>
                    </div>
                </div>

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
                            font-bold text-[14px] leading-[100px] w-[100%] text-white
                            md:text-3xl
                        ' style={{ fontFamily: 'poppins' }}>
                           Upgrade
                        </h2>
                        <p style={{ fontFamily: 'poppins' }} className='text-center text-[12px] w-[75%] m-auto text-white'>
                            Ajudamos você a construir uma aplicação com a sua cara de ponta a ponta
                        </p>
                    </div>
                </div>

            </div>
            <div className='m-7'>
                <h3 className='
                    text-white text-center text-[12px]  font-[poppins]
                '>
                    Usando tecnologias modernas
                </h3>
                <div className='
                    flex justify-center
                '>
                    <a href="https://nestjs.com/" className='m-[35px'>
                        <img src={NestJsImg} alt="" />
                    </a>
                    <a href="https://react.dev/" className='m-[35px'>
                        <img src={ReactJsImg} alt="" />
                    </a>
                    <a href="https://www.typescriptlang.org/" className='m-[35px'>
                        <img src={TsImg} alt="" />
                    </a>
                    <a href="https://www.java.com/pt-BR/" className='m-[35px'>
                        <img src={JavaImg} alt="" />
                    </a>
                </div>
            </div>
        </main>
    )
}

export default WhatWeDo