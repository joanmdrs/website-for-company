'use client'
import Image from 'next/image';
import "./Home.css"
import assetHome from "../../assets/asset-home.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { PiVideoFill } from "react-icons/pi";

import {Button} from 'antd';

function Home(){
    return (
        <div className='section-home'>
            <div className='info-home'>
                <div className='title-home'>
                    <h1> Uma boa <span className='different-color'> educação </span> é a base para um <span className='text-background'> futuro </span> melhor </h1>
                </div>
                <div className='text-home'>
                    <p> Uma comunidade integrante, repleta de talentos e excelência acadêmica, que nutre altas expectativas e elevado desempenho. Não 
                        perca mais tempo e conheça algum dos nossos cursos clicando em Iniciar.
                    </p>
                </div>
                <div className='home-buttons'>
                    <Button type='primary' className='get-started'> 
                        Vamos Iniciar
                        <FaArrowRightLong />
                       
                    </Button>

                    <Button type='default' className='watch-video'> 
                        <PiVideoFill/> Assista o vídeo
                    </Button>
                </div>
      
            </div>

            <div className='image-home'>
                <div className='box-img'> <Image src={assetHome} /> </div>
                <div className='box-background'></div>
            </div>
        </div>
        
    )
}

export default Home