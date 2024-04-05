import Image from "next/image";
import "./Contact.css"
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import assetStudent from "../../assets/contact/asset-student.png"

function Contact(){
    return (
        <section className="contact-section">
            <div className="contact-title"> 
                <h2> Contate-nos </h2>
            </div>

            <div className="contact-content"> 
                <div className="contact-form">
                    <div>
                        <h4> Envie-nos uma mensagem </h4>
                    </div>
                    <form>
                        <input type="text" placeholder="Nome" />
                        <input type="email" placeholder="Email"/>
                        <input type="text" placeholder="Assunto"/>
                        <textarea  rows={4} placeholder="Mensagem ..."/>

                        <button> Enviar </button>
                    </form>
                </div>

                <div className="contact-text"> 
                    <div className="contact-info"> 
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

                    <div className="contact-image"> 
                        <Image src={assetStudent} />
                        <div className="circle-1"> </div>
                        <div className="circle-2"> </div>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Contact