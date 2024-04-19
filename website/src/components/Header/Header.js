import ButtonContact from "../Buttons/ButtonContact/ButtonContact"
import Logo from "../Logo/Logo"
import "./Header.css"
import ButtonTheme from "../Buttons/ButtonTheme/ButtonTheme"
import CustomMenu from "../Menu/Menu"
import React from 'react';
import {Layout } from 'antd'
const {Header} = Layout
function CustomHeader(){


    return (

        <div className="component-header"> 
            <Logo />
            <CustomMenu />
            <div style={{
                width: "25%",
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '10px'
            }}>
                <ButtonTheme />
                <ButtonContact />

            </div>
        </div>
    )
}

export default CustomHeader