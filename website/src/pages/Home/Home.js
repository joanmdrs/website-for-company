import assetHomeImage from '../../assets/asset-home.png';
import Image from 'next/image';
import "./Home.css"
import { Button } from 'antd';
import { IoMdArrowDropright } from "react-icons/io";
import assetHome from "../../assets/asset-home.png"
import { IoIosArrowRoundForward } from "react-icons/io";


function Home(){
    return (
        <div className='section-home'>
            <div className='info-home'>
                <div className='title-home'>
                    <h1> Uma boa <span className='different-color'> educação </span> é a base para um <span className='text-background'> futuro </span> melhor </h1>
                </div>
                <div className='text-home'>
                    <p> Uma comunidade com grandes expectativas e alto desempenho acadêmico </p>
                </div>
                <div className='button-home'>
                    <button> 
                        Iniciar
                        <IoIosArrowRoundForward size="25px" />
                       
                    </button>
                </div>
      
            </div>

            <div className='image-home'>
                <div className='box-img'> <Image src={assetHome} /> </div>
                <div className='box-1'></div>
                <div className='box-2'></div>
                <div className='box-3'></div>
                <div className='box-4'></div>
            </div>
        </div>
        
    )
}

export default Home