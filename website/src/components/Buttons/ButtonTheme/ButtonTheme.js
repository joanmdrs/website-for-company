'use client'
import { useState } from "react"
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import {Button} from 'antd'

function ButtonTheme(){

    const [theme, setTheme] = useState('light')

    const handleChangeTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }
    return (
        <Button 
            onClick={handleChangeTheme}
            style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: 'none',
                borderRadius: '50%',
                padding: "10px",
                backgroundColor: "var(--primary-color)",
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                cursor: 'pointer',
            }}
        > 
            {theme === 'light' ? <IoSunnyOutline size="25px" color="#FFFFFF" /> : <IoMoonOutline size="25px" color="#FFFFFF"/> }
        </Button>
    )
}

export default ButtonTheme