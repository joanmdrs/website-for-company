import "./Logo.css"
import Image from 'next/image'
import assetLogo from "../../assets/header/logo.png"
import { PiCube } from "react-icons/pi";


function Logo({corTitle, corSubtitle, corIcon}){
    return (
        <div className="component-logo"> 
            <PiCube style={{color: `${corIcon}`, fontSize: "25px"}} />
            <div className="company-name"> 
                <p style={{color: `${corTitle}`}}>TECHINNOVATE</p>
                <p  style={{color: `${corSubtitle}`}}>SPECIALIST ACADEMY</p>
            </div>
        </div>
    )
}

export default Logo