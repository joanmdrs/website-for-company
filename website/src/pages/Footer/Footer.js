import { IoCallOutline, IoLocationOutline } from "react-icons/io5"
import "./Footer.css"
import { MdOutlineEmail } from "react-icons/md"

function Footer () {

    return (

        <section className="footer-section">

            <div className="footer-box-top">
                <div className="footer-info">
                    <div className="footer-logo"> </div>
                    <p> Inicie sua jornada de descoberta online hoje. Mergulhe na exploração do encanto agora. </p>
                </div>
                <div className="footer-links">

                    <h5> Links </h5>
                    <ul>
                        <li><a> Home </a></li>
                        <li><a> Cursos </a></li>
                        <li><a> Sobre  </a></li>
                        <li><a> Eventos </a></li>
                        <li><a> Contate-nos </a></li>
                    </ul>

                </div>

                <div className="footer-contact">
                    <h5> Contato </h5>
                    <div> 
                            <IoLocationOutline />
                            <p> 123, Rua das Flores, Bairro dos Negócios, São Paulo, Brasil</p>
                        </div>

                        <div> 
                            <IoCallOutline />
                            <p> +55 84 1234-5678 </p>
                        </div>

                        <div> 
                            <MdOutlineEmail />
                            <p>  enterprise.education@businnes.com </p>
                        </div>
                </div>

                <div className="footer-support">
                    <h5> Suporte </h5>
                    <ul>
                        <li><a> Central de Suporte </a></li>
                        <li><a> Política de Privacidade </a></li>
                        <li><a> FAQ's  </a></li>
                    </ul>
                </div>


            </div>

        </section>
    )

}

export default Footer