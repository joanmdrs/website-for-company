import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import "./Courses.css";
import Card from '../../components/Card/Card.js';
import Image from "next/image";
import designGrafico from "../../assets/courses/design-grafico.jpg"
import designUiUx from "../../assets/courses/design-ui-ux.jpg"
import designGames from "../../assets/courses/design-games.jpg"
import marketingConteudo from "../../assets/courses/marketing-conteudo.jpg"
import seo from "../../assets/courses/seo.jpg"
import midiasSociais from "../../assets/courses/midias-sociais.jpg"
import desenvolvimentoWeb from "../../assets/courses/desenvolvimento-web.jpg"
import desenvolvimentoMobile from "../../assets/courses/desenvolvimento-mobile.jpg"
import desenvolvimentoParaIA from "../../assets/courses/inteligencia-artificial.jpg"



function Courses() {
    const courses = [
        {
            title: "Design Gráfico",
            description: "Curso de Design Gráfico focado na criação de elementos visuais para diversos meios de comunicação.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Design Grafico" src={designGrafico} />
        },
        {
            title: "Design UI/UX",
            description: "Curso de Design de Interface do Usuário (UI) e Experiência do Usuário (UX) abrangendo princípios de design e usabilidade.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Design UI/UX" src={designUiUx} />
        },
        {
            title: "Design de Games",
            description: "Curso de Design de Jogos com foco na criação de experiências interativas e narrativas envolventes.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Design de Games" src={designGames} />
        },
        {
            title: "Marketing de Conteúdo",
            description: "Curso de Marketing Digital com ênfase na criação e distribuição de conteúdo relevante para o público-alvo.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Marketing de Conteudo" src={marketingConteudo} />
        },
        {
            title: "SEO",
            description: "Curso de Otimização de Motores de Busca (SEO) abrangendo técnicas e estratégias para melhorar o posicionamento de websites nos resultados de busca.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="SEO" src={seo} />
        },
        {
            title: "Mídias Sociais para Empresas",
            description: "Curso de Gestão de Mídias Sociais com foco em estratégias de marketing e comunicação para empresas nas redes sociais.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Mídias Sociais" src={midiasSociais} />
        },
        {
            title: "Desenvolvimento Web",
            description: "Curso de Desenvolvimento Web abrangendo linguagens de programação e tecnologias para a criação de sites e aplicações web.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Desenvolvimento Web" src={desenvolvimentoWeb} />
        },
        {
            title: "Desenvolvimento Mobile",
            description: "Curso de Desenvolvimento de Aplicações Mobile abrangendo plataformas como iOS e Android.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Desenvolvimento Mobile" src={desenvolvimentoMobile} />
        },
        {
            title: "Desenvolvimento para IA",
            description: "Curso de Desenvolvimento de Inteligência Artificial abrangendo conceitos e técnicas para a criação de sistemas inteligentes.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image:  <Image alt="Desenvolvimento para IA" src={desenvolvimentoParaIA} />
        }
    ];
      

    return (
        <div className="courses-section">
            <div className="courses-header">
                <div className="courses-info">
                    <h1> Cursos populares </h1>
                    <p> Estes são alguns dos diversos cursos oferecidos por nossa empresa </p>
                </div>

                <div className="view-all-courses"> 
                    <span> VER TODOS OS CURSOS <FaArrowRightLong /> </span>
                </div>
            </div>     
            <div className='courses-content'>
                {courses.map((course, index) => (
                    <Card 
                        key={index} 
                        image={course.image} 
                        title={course.title}
                        subtitle={course.subtitle}
                        description={course.description}
                        formation={course.formation}
                        modality={course.modality}
                    />
                ))}
            </div>      
        </div>
    );
}

export default Courses;
