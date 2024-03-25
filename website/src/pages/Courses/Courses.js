import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import "./Courses.css";
import Card from '../../components/Card/Card.js';
import assetBusinnes from "../../assets/courses/businnes.png";
import assetFinances from  "../../assets/courses/finances.png";
import assetItAndSoftware from "../../assets/courses/it-and-software.png";
import assetMarketing from "../../assets/courses/marketing.png";
import assetDesigner from "../../assets/courses/designer.png";
import assetPhotograph from "../../assets/courses/photograph.png";
import Image from "next/image";

function Courses() {
    const courses = [
        {
            title: "Negócios",
            subtitle: "Aprenda estratégias de negócios",
            description: "Este curso aborda diversas estratégias e táticas de negócios para impulsionar o sucesso da sua empresa.",
            modality: "Online",
            formation: "Certificação",
            image: <Image alt="Curso de Negócios" src={assetBusinnes} />
        },
        {
            title: "Finanças",
            subtitle: "Gestão financeira eficaz",
            description: "Aprenda os fundamentos da gestão financeira, desde orçamentos até análise de investimentos.",
            modality: "Presencial",
            formation: "Diploma",
            image: <Image alt="Curso de Finanças" src={assetFinances} />
        },
        {
            title: "TI e Software",
            subtitle: "Desenvolvimento de software",
            description: "Este curso abrange programação, desenvolvimento web, aplicativos móveis e muito mais.",
            modality: "Online",
            formation: "Certificação",
            image: <Image alt="Curso de TI e Software" src={assetItAndSoftware} />
        },
        {
            title: "Marketing",
            subtitle: "Estratégias de marketing digital",
            description: "Aprenda as últimas estratégias de marketing digital, incluindo SEO, PPC e mídias sociais.",
            modality: "Online",
            formation: "Certificação",
            image: <Image alt="Curso de Marketing" src={assetMarketing} />
        },
        {
            title: "Design",
            subtitle: "Princípios de design gráfico",
            description: "Explore os fundamentos do design gráfico, incluindo teoria da cor, tipografia e layout.",
            modality: "Presencial",
            formation: "Diploma",
            image: <Image alt="Curso de Design" src={assetDesigner} />
        },
        {
            title: "Fotografia",
            subtitle: "Técnicas avançadas de fotografia",
            description: "Este curso ensina técnicas avançadas de fotografia, incluindo composição, iluminação e edição de fotos.",
            modality: "Presencial",
            formation: "Diploma",
            image: <Image alt="Curso de Fotografia" src={assetPhotograph} />
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
