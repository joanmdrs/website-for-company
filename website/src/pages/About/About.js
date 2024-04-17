import "./About.css"
import Image from "next/image"
import assetSectionAbout from "../../assets/about/asset-section-about.jpg"
import { AiOutlinePlayCircle } from "react-icons/ai"
import { FaArrowTrendUp } from "react-icons/fa6";

function About(){
    return (
        <section className="about-section">
            <div className="about-section-box-left">
                <div className="about-title">
                    <h2>DESCUBRA <span> QUEM NÓS </span>SOMOS ?</h2>
                </div>

                <div className="about-text"> 
                    <p>Bem-vindo à TechInnovate Specialist Academy, sua plataforma de excelência para o desenvolvimento de especialistas em tecnologia e inovação! Na TechInnovate, estamos comprometidos em capacitar indivíduos talentosos com as habilidades e conhecimentos necessários para liderar na vanguarda da revolução tecnológica.</p>

                    <p>Em um mundo cada vez mais digital e dinâmico, a demanda por especialistas em tecnologia e inovação nunca foi tão alta. Na TechInnovate, reconhecemos a importância de oferecer uma educação de classe mundial que não apenas atenda, mas ultrapasse as expectativas do mercado. Nossos cursos são cuidadosamente projetados e ministrados por especialistas do setor, garantindo que os alunos adquiram habilidades práticas e conhecimentos atualizados que são diretamente aplicáveis ​​ao mundo real.
                    </p>

                    <div className="box-button-know-more">
                        <button> Saiba mais <FaArrowTrendUp /> </button>
                    </div>
                </div>
            </div>

            <div className="about-section-box-right"> 

                <div>
                    {/* <Image src={assetSectionAbout} /> */}
                    <div className="play-video-about">
                        <AiOutlinePlayCircle />
                    </div>               
                </div>
            </div>
            
        </section>
    )
}

export default About
