import asset1 from "../../../assets/reasons/excelência.png"
import asset2 from "../../../assets/reasons/desenvolvimento.png"
import asset3 from "../../../assets/reasons/comunidade.png"
import asset4 from "../../../assets/reasons/inovacao.png"
import asset5 from "../../../assets/reasons/responsabilidade.png"
import asset6 from "../../../assets/reasons/empreendedorismo.png"
import Image from "next/image";
import { feedbacks } from "@/pages/Feedback/data/_dataFeedback"

export const motivos = [
    {   
        image: <Image src={asset1}/>,
        title: "Excelência Acadêmica",
        description:
            "Nossa instituição se dedica incansavelmente à busca da excelência acadêmica. Desde a seleção cuidadosa de professores altamente qualificados até o fornecimento de recursos educacionais de última geração. ",
    },
    {
        image: <Image src={asset2}/>,
        title: "Desenvolvimento Profissional",
        description:
            "Nosso compromisso com o desenvolvimento profissional vai além da sala de aula. Oferecemos uma ampla gama de oportunidades e recursos para ajudar nossos alunos a desenvolverem suas habilidades e avançarem em suas carreiras. ",
    },
    {
        image: <Image src={asset3}/>,
        title: "Comunidade integrada",
        description:
            "Nossa comunidade é mais do que um simples grupo de pessoas. É um ambiente acolhedor e inclusivo, onde cada membro é valorizado e respeitado. "
    },
    {
        image: <Image src={asset4}/>,
        title: "Inovação Tecnológica",
        description: "Na vanguarda da inovação tecnológica, estamos comprometidos em fornecer uma experiência educacional que integra as últimas tendências e avanços tecnológicos. "
    },
    {
        image: <Image src={asset5}/>,
        title: "Responsabilidade Social e Ambiental",
        description: "Acreditamos que a educação vai além das salas de aula e dos currículos acadêmicos. É também sobre responsabilidade social e ambiental. "
    },
    {
        image: <Image src={asset6}/>,
        title: "Empreendedorismo e Inovação",
        description: "Fomentamos uma cultura de empreendedorismo e inovação, onde a criatividade e a ambição são incentivadas e valorizadas. "
    }
];
