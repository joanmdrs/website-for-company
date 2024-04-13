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
import { cursos } from './data/dataCourses';

function Courses() {
    
    const [slide, setSlide] = useState('slide-1')

    const splitCoursesIntoGroups = (courses, groupSize) => {
        const groups = [];
        for (let i = 0; i < courses.length; i += groupSize) {
            groups.push(courses.slice(i, i + groupSize));
        }
        return groups;
    };

    const courseGroups = splitCoursesIntoGroups(cursos, 4);

    const handleChangeSlide = ({target: {id}}) => {
        setSlide(id)
    }


    return (
        <div className="courses-section">
            <div className="courses-header">
                <div className="courses-title">
                    <h2> CONHEÇA <span> NOSSOS CURSOS </span> MAIS POPULARES</h2>
                    <p> Explore nosso catálogo diversificado de cursos projetados para impulsionar seu conhecimento e habilidades em diversas áreas. </p>
                </div>

                <div className="box-button-view-all-courses">
                    <button> VER TODOS OS CURSOS <FaArrowRightLong /> </button>
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
                                    title={course.titulo}
                                    subtitle={course.subtitulo}
                                    description={course.descricao}
                                    duration={course.duracao}
                                    lessons={course.numeroAulas}
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
