import Image from "next/image";
import student1 from "../../../assets/feedbacks/student-1.jpg"
import student2 from "../../../assets/feedbacks/student-2.jpg"
import student3 from "../../../assets/feedbacks/student-3.jpg"
import student4 from "../../../assets/feedbacks/student-4.jpg"


const feedbacks = [
    {
        image: <Image src={student1} />,
        autor: "Juliana Lopes",
        course: 'Design Gráfico',
        score: 4,
        title: 'Excelente curso!',
        comment: "Gostei muito do curso de Design Gráfico. Os materiais didáticos são excelentes e os instrutores são muito experientes. Recomendo fortemente!",
    },
    {
        image: <Image src={student2} />,
        autor: "Bruno Oliveira",
        course: 'Front-end Development',
        score: 5,
        title: 'Ótimo conteúdo',
        comment: "O curso de Front-end Development foi extremamente útil para minha carreira. Aprendi muitas técnicas novas e agora me sinto confiante para trabalhar em projetos mais complexos.",
    },
    {
        image: <Image src={student3} />,
        autor: "Ana Silva",
        course: 'Data Science',
        score: 3,
        title: 'Recomendo totalmente!',
        comment: "O curso de Data Science superou minhas expectativas. Os instrutores são muito competentes e os projetos práticos foram extremamente enriquecedores.",
    },
    {
        image: <Image src={student4} />,
        autor: "Ricardo Mendes",
        course: 'Cloud Computing',
        score: 4,
        title: 'Muito informativo',
        comment: "O curso de Cloud Computing me deu uma compreensão sólida dos conceitos fundamentais e das práticas recomendadas na nuvem. Altamente recomendado para iniciantes!",
    },
    {
        image: <Image src={student1} />,
        autor: "Luana Santos",
        course: 'Introdução à Programação',
        score: 5,
        title: 'Fantástico!',
        comment: "Este curso de Introdução à Programação é simplesmente fantástico. Aprendi muito e agora estou ansiosa para me aprofundar mais nesse campo.",
    },
    {
        image: <Image src={student2} />,
        autor: "Pedro Martins",
        course: 'Machine Learning',
        score: 5,
        title: 'Impressionante!',
        comment: "O curso de Machine Learning superou todas as minhas expectativas. Os casos de estudo práticos foram muito úteis para entender os conceitos mais complexos.",
    }
];

export default feedbacks