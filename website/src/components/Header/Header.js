'use client'
import { useEffect, useState } from "react"
import ButtonContact from "../Buttons/ButtonContact/ButtonContact"
import Logo from "../Logo/Logo"
import Menu from "../Menu/Menu"
import "./Header.css"

function Header(){

    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (

        <div className={`component-header ${scrollPosition > 100 ? 'header-shadow' : ''}`}> 
            <Logo />
            <Menu />
            <ButtonContact />
        </div>
    )
}

export default Header