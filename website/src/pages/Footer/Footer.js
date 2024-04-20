import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import "./Footer.css"
import { MdOutlineEmail } from "react-icons/md"
import Logo from "@/components/Logo/Logo"
import { SiYoutube } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiTwitter } from "react-icons/si";


function Footer () {

    return (

        <section className="footer-section">

            <div className="footer-box-top">
                <div className="footer-info">
                    <Logo corIcon="#FFFFFF" corTitle="#58ACFA" corSubtitle="#FFFFFF"  />
                    <p> Inicie sua jornada de descoberta online hoje. Mergulhe na exploração do encanto agora. </p>
                    <div className="footer-box-icons"> 
                        <div className="footer-box-icon-social-media"><SiYoutube /></div>
                        <div className="footer-box-icon-social-media"><SiWhatsapp /></div>
                        <div className="footer-box-icon-social-media"><SiInstagram /></div>
                        <div className="footer-box-icon-social-media"><SiTwitter /></div>
                    </div>
                </div>
                <div className="footer-links">

                    <h4> Links </h4>
                    <ul>
                        <li><a> Home </a></li>
                        <li><a> Cursos </a></li>
                        <li><a> Sobre  </a></li>
                        <li><a> Eventos </a></li>
                    </ul>

                </div>

                <div className="footer-support">
                    <h4> Suporte </h4>
                    <ul>
                        <li><a> Central de Suporte </a></li>
                        <li><a> Política de Privacidade </a></li>
                        <li><a> FAQ's  </a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h4> Contato </h4>
                    <ul> 
                        <li>
                            <IoLocationOutline />
                            <p> 123, Rua das Flores, Bairro dos Negócios, São Paulo, Brasil</p>
                        </li>

                           

                        <li> 
                            <IoCallOutline />
                            <p> +55 84 1234-5678 </p>
                        </li>

                        <li> 
                            <MdOutlineEmail />
                            <p>  enterprise.education@businnes.com </p>
                        </li>
                    </ul>
                </div>


            </div>

        </section>
    )

}

export default Footer