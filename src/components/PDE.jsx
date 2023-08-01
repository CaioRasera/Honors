import React from 'react'
import Engrenagem from '../assets/Engrenagem.png'
import AirplaneImg from '../assets/Airplane.png'
import AirplaneWClouds from '../assets/AirplaneWithClouds.png'
import line1 from '../assets/Line-1.png'
import line2 from '../assets/Line-2.png'
import shadow from '../assets/Sombra.png'
import Navbar from './Navbar'
import User from '../assets/User.png'
import aspas from '../assets/Aspas.png'

function PDE() {
    return (
        <div className='
    m-auto
    h-screen
    w-screen
    p-8
    bg-white
    '>
            <div className='
                lg:flex
                
            '>
                <div className='
                    lg:h-[110px]
                    lg:mt-28
                '>
                    <div className='
                    w-[280px]
                    h-[110px]
                    flex
                    m-auto
                    relative
                    top-[100%]
                            '>
                        <img className='
                            w-[40px]
                            h-[40px]
                            lg:w-[90.411px]
                            lg:h-[112.519px]
                            ' src={Engrenagem} alt="" />
                        <img className='
                            w-[51.5px]
                            h-[5px]
                            mt-5
                            mx-2
                            lg:h-[14.815px]
                            lg:w-[124.129px]
                            ' src={line1} alt="" />
                        <img className='
                            w-[40px]
                            h-[40px]
                            relative
                            top-[-10px]
                            lg:w-[90.411px]
                            lg:h-[112.519px]
                            lg:top-[-70px]
                            ' src={AirplaneImg} alt="" />
                        <img className='
                            w-[69.191px]
                            h-[11.366px]
                            rotate-[-10.054deg]
                            relative
                            top-[-10px]
                            lg:w-[171.575px]
                            lg:h-[33.02px]
                            lg:top-[-70px]
                            ' src={line2} alt="" />
                        <img className='
                            w-[40px]
                            h-[40px]
                            relative
                            top-[-40px]
                            ml-3
                            lg:w-[90.411px]
                            lg:h-[112.519px]
                            lg:top-[-140px]
                            ' src={AirplaneWClouds} alt="" />
                    </div>
                    <img className='
                            m-auto
                            flex
                            justify-center
                            mt-[60px]
                            lg:w-[513.388px]
                            lg:h-[59.259px]
                            lg:ml-[45%]
                            lg:mt-[100px]
                            ' src={shadow} alt="" />
                </div>
                <div className='text-left ml-[30%]'>
                    <div className='w-[100%] font-[poppins] mt-10 mb-10'>
                        <div className='w-[40%] mr-auto'>
                            <h2 className='font-bold font-[poppins]'>
                                Planejamento
                            </h2>
                            <div className='
                            border-[#38108C]
                            border-2
                            inline-block
                            shrink
                            w-[40px]
                            md:w-[40px]
                            rounded-[12px]
                        '>
                            </div>
                        </div>
                        <p className=''>
                            Ajudamos inovadores a entender rapidamente como criaremos seus produtos digitais e fornecemos uma vantagem comercial competitiva. <br /> A ideia que funciona.
                        </p>
                    </div>
                    <div className='w-[100%] font-[poppins] mt-10'>
                        <h2 className='font-bold font-[poppins]'>
                            Decolagem
                        </h2>
                        <div className='
                        border-[#38108C]
                        border-2
                        inline-block
                        w-[80px]
                        rounded-[12px]
                    '>
                        </div>
                        <p>
                            Construímos produtos digitais de alta qualidade que podem se dimensionados. Fazemos isso por meio de novas tecnologias, grandes talentos e verdadeiros métodos ágeis. <br /> O produto que funciona
                        </p>
                    </div>
                    <div className='w-[100%] font-[poppins] mt-10 mb-10'>
                        <h2 className='font-bold font-[poppins]'>
                            Entrega
                        </h2>
                        <div className='
                        border-[#38108C]
                        border-2
                        inline-block
                        w-[140px]
                        rounded-[12px]
                    '>
                        </div>
                        <p>
                            Fornecemos equipes de solução completa para empresas de tecnologia de alto crescimento usando novas linguagens de programação para mover-se mais rapidamente. <br /> A equipe que trabalha.
                        </p>
                    </div>
                </div>

            </div>
            <div className='
                md:flex
                '>
                <div className='w-[90%] h-[300px] m-auto'>
                    <img src={aspas} alt="" />
                    <img className='
                      bg-gray-600
                        rounded-full
                        w-[32px]
                        h-[32px]
                        ' src={User} alt="user" />
                    <p className='
                            w-[300px]
                            text-center
                            ml-[10%]
                            font-normal
                            font-[poppins]
                            sm:w-[80%]
                            sm:ml-[15%]
                        '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aperiam accusamus beatae, obcaecati minima, illo animi nam voluptatibus suscipit error vel reprehenderit debitis imi nam voluptatibus suscipit error vel reprehenderit debitisimi nam voluptatibus suscipit error vel reprehenderit debitis
                    </p>
                </div>
                <div className='w-[90%] h-[300px] m-auto'>
                    <img src={aspas} alt="" />
                    <img className='
                      bg-gray-600
                      rounded-full
                      w-[32px]
                      h-[32px]
                        ' src={User} alt="user" />
                    <p className='
                            w-[300px]
                            text-center
                            ml-[10%]
                            font-normal
                            font-[poppins]
                            sm:w-[80%]
                            sm:ml-[15%]
                        '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem aperiam accusamus beatae, obcaecati minima, illo animi nam voluptatibus suscipit error vel reprehenderit debitis imi nam voluptatibus suscipit error vel reprehenderit debitisimi nam voluptatibus suscipit error vel reprehenderit debitis
                    </p>
                </div>
            </div>

        </div>

    )
}

export default PDE