import assetHomeImage from '../../assets/asset-home.png';
import Image from 'next/image';
import "./Home.css"
import { Button } from 'antd';
import { IoMdArrowDropright } from "react-icons/io";

function Home(){
    return (
        <div className='section-home'>
            <div className='info-home'> 
                <h1>Conheça nossos cursos</h1>
                <p>Nossos cursos são ministrados por profissionais experientes que trabalham em suas áreas. Eles têm anos de experiência no mundo real e são apaixonados por ensinar outras pessoas.</p>
                <button>Começar <IoMdArrowDropright size="20px" /></button>
            </div>
            <div className='trapezoid'></div>
            <div className='image-home'>
                <Image
                    src={assetHomeImage}
                    alt="Picture of the student"
                />
            </div>
        </div>
        
    )
}

export default Home