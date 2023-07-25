import React from 'react'
import Navbar from './Navbar'
import Image from '../assets/honorsLogoWhite.png'
import PhoneIcon from '../assets/phoneIconWhite.png'
import '../assets/css/fonts.css'

function WhatWeDo() {
    return (
        <div className='
            h-[100vh]
        '>
            <div className="header flex justify-between ">
                <a href="" className='mx-10 my-5'>
                    <img src={Image} alt="" />
                </a>
                <a href="" className='mx-10 my-5'>
                    <img src={PhoneIcon} alt="" />
                </a>
            </div>
            <h1
                className='
                text-center font-extrabold text-5xl m-28
            '
                style={{ fontFamily: 'poppins' }}
            >O que fazemos ?
            </h1>
            <div className='
            flex 
            justify-evenly 
            my-20 
            text-center
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
                    w-[228.9px]
                    rounded-[12px]'/>
                    <div>
                        <h2 className='
                            font-bold text-3xl leading-[100px] w-[100%]
                        ' style={{ fontFamily: 'poppins' }}>
                            Do design ao código
                        </h2>
                        <p style={{ fontFamily: 'poppins' }} className='text-center '>
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
                    w-[228.9px]
                    rounded-[12px]'/>

                    <div>
                    <h2 className='
                            font-bold text-3xl leading-[100px] w-[100%]
                        ' style={{ fontFamily: 'poppins' }}>
                           Upgrade
                        </h2>
                        <p style={{ fontFamily: 'poppins' }} className='text-center '>
                            Ajudamos você a construir uma aplicação com a sua cara de ponta a ponta
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default WhatWeDo