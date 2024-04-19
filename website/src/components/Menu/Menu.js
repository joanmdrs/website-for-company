'use client'

import React from "react"
import "./Menu.css"
import { AiOutlineHome } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { MdOutlineEmojiEvents } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { ImNewspaper } from "react-icons/im";

function CustomMenu () {

    return (
        <menu className="menu">
          <li><AiOutlineHome /> Home </li>
          <li><PiBag /> Cursos </li>
          <li><FaRegBuilding /> Sobre </li>
          <li><MdOutlineEmojiEvents /> Eventos </li>
      </menu>
    )
    
}

export default CustomMenu