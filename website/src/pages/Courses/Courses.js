'use client'
import React, { useState } from 'react';
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
import { useSearchParams } from 'next/navigation';

function Courses() {
    const courses = [
        {
            title: "Design Gráfico",
            subtitle: "Design Gráfico",
            description: "Curso de Design Gráfico focado na criação de elementos visuais para diversos meios de comunicação.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Design Grafico" src={designGrafico} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "Design UI/UX",
            subtitle: "Design UI/UX",
            description: "Curso de Design de Interface do Usuário (UI) e Experiência do Usuário (UX) abrangendo princípios de design e usabilidade.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Design UI/UX" src={designUiUx} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "Design de Games",
            subtitle: "Design de Games",
            description: "Curso de Design de Jogos com foco na criação de experiências interativas e narrativas envolventes.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Design de Games" src={designGames} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "Marketing de Conteúdo",
            subtitle: "Marketing de Conteúdo",
            description: "Curso de Marketing Digital com ênfase na criação e distribuição de conteúdo relevante para o público-alvo.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Marketing de Conteudo" src={marketingConteudo} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "CURSO SEO",
            subtitle: 'Curso de SEO',
            description: "Curso de Otimização de Motores de Busca (SEO) abrangendo técnicas e estratégias para melhorar o posicionamento de websites nos resultados de busca.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="SEO" src={seo} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "Mídias Sociais para Empresas",
            subtitle: "Mídias Sociais para Empresas",
            description: "Curso de Gestão de Mídias Sociais com foco em estratégias de marketing e comunicação para empresas nas redes sociais.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Mídias Sociais" src={midiasSociais} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "Desenvolvimento Web",
            subtitle: "Desenvolvimento Web",
            description: "Curso de Desenvolvimento Web abrangendo linguagens de programação e tecnologias para a criação de sites e aplicações web.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Desenvolvimento Web" src={desenvolvimentoWeb} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "Desenvolvimento Mobile",
            subtitle: "Desenvolvimento Mobile",
            description: "Curso de Desenvolvimento de Aplicações Mobile abrangendo plataformas como iOS e Android.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Desenvolvimento Mobile" src={desenvolvimentoMobile} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        },
        {
            title: "Desenvolvimento para IA",
            subtitle: "Desenvolvimento para IA",
            description: "Curso de Desenvolvimento de Inteligência Artificial abrangendo conceitos e técnicas para a criação de sistemas inteligentes.",
            modality: "Presencial ou Online",
            formation: "Certificado de Conclusão",
            image: <Image alt="Desenvolvimento para IA" src={desenvolvimentoParaIA} />,
            duration: "12 hrs 30 mins",
            lessons: "24 lessons",
            price: "200"
        }
    ];

    const [slide, setSlide] = useState('slide-1')

    const splitCoursesIntoGroups = (courses, groupSize) => {
        const groups = [];
        for (let i = 0; i < courses.length; i += groupSize) {
            groups.push(courses.slice(i, i + groupSize));
        }
        return groups;
    };

    const courseGroups = splitCoursesIntoGroups(courses, 3);

    const handleChangeSlide = ({target: {id}}) => {
        setSlide(id)
    }

    return (
        <div className="courses-section">
            <div className="courses-header">
                <div className="courses-info">
                    <h2> NOSSOS CURSOS MAIS POPULARES</h2>
                </div>

                <div className="view-all-courses">
                    <span> VER TODOS OS CURSOS <FaArrowRightLong /> </span>
                </div>
            </div>
            <div className='courses-content'>
                <div className={`courses-carousel ${slide}`}>
                    {courseGroups.map((group, index) => (
                        <div key={index} className="carousel-group">
                            {group.map((course, idx) => (
                                <Card
                                    key={idx}
                                    image={course.image}
                                    title={course.title}
                                    subtitle={course.subtitle}
                                    description={course.description}
                                    duration={course.duration}
                                    lessons={course.lessons}
                                    price={course.price}
                                />
                            ))}
                        </div>
                    ))}
                </div>

                <div className='buttons-slide-carousel'>
                    <div 
                        id='slide-1' 
                        onClick={handleChangeSlide}
                        className={`button-slide ${slide === "slide-1" ? "button-slide-select" : ""}`}
                    />

                    <div 
                        id='slide-2' 
                        onClick={handleChangeSlide}
                        className={`button-slide ${slide === "slide-2" ? "button-slide-select" : ""}`}
                    />

                    <div 
                        id='slide-3' 
                        onClick={handleChangeSlide}
                        className={`button-slide ${slide === "slide-3" ? "button-slide-select" : ""}`}
                    />
                </div>

            </div>
        </div>
    );
}

export default Courses;
