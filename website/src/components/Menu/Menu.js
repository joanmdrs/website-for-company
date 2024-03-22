import { Menu } from "antd"
import React from "react"

function CustomMenu () {

    const items = [
        {
          label: 'Página Inicial',
          key: 'home',
        },
        {
          label: 'Sobre a Instituição',
          key: 'about',
        },
        {
            label: 'Programas Acadêmicos',
            key: 'academic-programs'
        },
        {
            label: 'Admissões',
            key: 'admissions'
        },
        {
            label: 'Vida Estudantil',
            key: 'life-student'
        },
        {
            label: 'Pesquisa e Inovação',
            key: 'research-and-innovation'
        },
        {
            label: 'Notícias', 
            key: 'news',
        },
        {
            label: 'Contato',
            key: 'contact'
        }
    ]
    return (
        <Menu theme="light" style={{backgroundColor: "var(--white-color)"}} items={items} mode="horizontal" />
    )
    
}

export default CustomMenu