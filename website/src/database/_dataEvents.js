import Image from "next/image";
import event1 from "../assets/events/event1.png"
import event2 from "../assets/events/event2.png"
import event3 from "../assets/events/event3.png"
import event4 from "../assets/events/event4.png"

export const events = [
    {
        image: <Image src={event1} />,
        title: "Conferência de Tecnologia",
        date: "2024-05-15",
        local: "Centro de Convenções",
        description: "Uma conferência emocionante sobre as últimas tendências em tecnologia."
    },
    {
        image: <Image src={event2} />,
        title: "Workshop de Design Gráfico",
        date: "2024-06-10",
        local: "Estúdio de Design",
        description: "Um workshop interativo para explorar as técnicas mais recentes em design gráfico."
    },
    {
        image: <Image src={event3} />,
        title: "Seminário de Negócios",
        date: "2024-07-20",
        local: "Sala de Conferências",
        description: "Um seminário abrangente sobre estratégias de negócios e empreendedorismo."
    },
    {
        image: <Image src={event4} />,
        title: "Curso de Programação",
        date: "2024-08-05",
        local: "Academia de Codificação",
        description: "Um curso prático para aprender as habilidades fundamentais de programação."
    }
];
  
  