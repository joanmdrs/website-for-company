import "./Logo.css"
import Image from 'next/image'
import assetLogo from "../../assets/header/logo.png"
import { PiCube } from "react-icons/pi";


function Logo(){
    return (
        <div className="component-logo"> 
            <PiCube style={{color: "var(--primary-color)", fontSize: "25px"}} />
            <div className="company-name"> 
                <p>TECHINNOVATE</p>
                <p>SPECIALIST ACADEMY</p>
            </div>
        </div>
    )
}

export default Logo