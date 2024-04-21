import course1 from "../assets/courses/1.png"
import course2 from "../assets/courses/2.png"
import course3 from "../assets/courses/3.png"
import course4 from "../assets/courses/4.png"
import course5 from "../assets/courses/5.png"
import course6 from "../assets/courses/6.png"
import course7 from "../assets/courses/7.png"
import course8 from "../assets/courses/8.png"
import course9 from "../assets/courses/9.png"
import course10 from "../assets/courses/10.png"
import course11 from "../assets/courses/11.png"
import course12 from "../assets/courses/12.png"
import Image from "next/image"

export const cursos = [
    {   
        image: <Image src={course1}  />,
        titulo: "Desenvolvimento Web Front-end com HTML5, CSS3 e JavaScript",
        subtitulo: "Desenvolvimento Web Front-end",
        descricao: "Aprenda os fundamentos do desenvolvimento web front-end utilizando HTML5, CSS3 e JavaScript para criar interfaces dinâmicas e responsivas.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course2}  />,
        titulo: "Frameworks Modernos para Front-end: Angular, React e Vue.js",
        subtitulo: "Frameworks Modernos para Front-end",
        descricao: "Explore os frameworks modernos mais populares - Angular, React e Vue.js - e aprenda a desenvolver aplicações web escaláveis e dinâmicas.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course3}  />,
        titulo: "UI/UX Design: Criando Interfaces Intuitivas e Atraentes",
        subtitulo: "UI/UX Design",
        descricao: "Domine os princípios do design de interface do usuário (UI) e experiência do usuário (UX) para criar produtos digitais atrativos e funcionais.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course4}  />,
        titulo: "Desenvolvimento de Aplicativos Móveis Híbridos com Ionic e React Native",
        subtitulo: "Desenvolvimento de Aplicativos Móveis Híbridos",
        descricao: "Aprenda a desenvolver aplicativos móveis multiplataforma com o uso de Ionic e React Native, combinando a eficiência do desenvolvimento web com a experiência de aplicativos nativos.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },

      {
        image: <Image src={course5}  />,
        titulo: "Desenvolvimento de Aplicações Web com Node.js e Express",
        subtitulo: "Desenvolvimento de Aplicações Web",
        descricao: "Aprenda a construir aplicações web escaláveis e eficientes utilizando Node.js e o framework Express.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course6}  />,
        titulo: "Introdução a Banco de Dados Relacionais e SQL para Desenvolvedores Back-end",
        subtitulo: "Banco de Dados Relacionais e SQL",
        descricao: "Introdução aos conceitos fundamentais de bancos de dados relacionais e linguagem SQL para desenvolvedores back-end.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course7}  />,
        titulo: "APIs Restful: Construindo Serviços Web Eficientes e Escaláveis",
        subtitulo: "APIs Restful",
        descricao: "Aprenda a projetar e implementar APIs Restful eficientes e escaláveis para seus projetos de desenvolvimento web.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course8}  />,
        titulo: "Segurança de Aplicações Web: Melhores Práticas e Prevenção de Ataques",
        subtitulo: "Segurança de Aplicações Web",
        descricao: "Conheça as melhores práticas de segurança de aplicações web e aprenda a prevenir ataques cibernéticos com eficácia.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course9}  />,
        titulo: "Introdução à Inteligência Artificial e Machine Learning",
        subtitulo: "Inteligência Artificial e Machine Learning",
        descricao: "Explore os conceitos fundamentais da inteligência artificial e aprendizado de máquina, e descubra como essas tecnologias estão moldando o futuro da computação.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course10}  />,
        titulo: "Internet das Coisas (IoT): Criando Conexões Inteligentes",
        subtitulo: "Internet das Coisas (IoT)",
        descricao: "Aprenda sobre a Internet das Coisas e como conectar dispositivos inteligentes para criar soluções inovadoras em diversos setores.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course11}  />,
        titulo: "Cloud Computing: Migração e Gerenciamento de Infraestrutura",
        subtitulo: "Cloud Computing",
        descricao: "Descubra os fundamentos da computação em nuvem e aprenda a migrar e gerenciar infraestruturas na nuvem de forma eficiente e segura.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      },
      {
        image: <Image src={course12}  />,
        titulo: "Análise de Dados e Visualização com Python e R",
        subtitulo: "Análise de Dados",
        descricao: "Aprenda técnicas de análise de dados e visualização utilizando as linguagens Python e R, e transforme dados em insights valiosos para sua empresa.",
        modalidade: "Presencial ou Online",
        formacao: "Certificado de Conclusão",
        duracao: "12 horas e 30 minutos",
        numeroAulas: 24,
        price: 200
      }
]