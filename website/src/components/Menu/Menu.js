'use client'

import React from "react"
import "./Menu.css"
import {Menu} from 'antd'
import { AiOutlineHome } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";

function CustomMenu () {

    const items = [
        {
          label: 'Home',
          key: 'home',
          icon: <AiOutlineHome />,
        },
        {
          label: 'Cursos',
          key: 'cursos',
          icon: <PiBag />
        },
        {
          label: 'Sobre',
          key: 'sobre',
          icon: <FaRegBuilding />
        },
        {
            label: 'Eventos',
            key: 'eventos',
            icon: <MdOutlineEmojiEvents/>
        },
        {
            label: 'Notícias',
            key: 'noticias',
            icon: <ImNewspaper/>
        }
    ]
    return (

        <Menu className="component-menu" mode="horizontal" items={items} />

    )
    
}

export default CustomMenu