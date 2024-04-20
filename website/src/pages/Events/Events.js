import { IoMdSend } from "react-icons/io"
import "./Events.css"
import Image from "next/image"
import { CiCalendar } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import event1 from '../../assets/events/event1.png'

function Events(){

    return (
        <section className="events-section">
            <div className="events-header"> 
                <div className="box-left">
                    <h2> PARTICIPE <span>DE ALGUM DOS</span> NOSSOS EVENTOS </h2>
                    <p>Esteja sempre atualizado sobre os eventos mais empolgantes! De conferências de tecnologia a workshops criativos, há sempre algo interessante acontecendo.</p>
                </div>
                <div className="box-right"> 
                    <button> Ver todos os eventos <IoMdSend /> </button>
                </div>
            </div>

            <div className="events-content"> 
                <div className="box-left">
                    <div className="event-item"> 
                        <h4 className="event-title">
                            Conferência Anual de Tecnologia
                        </h4>

                        <ul>
                            <li className="event-date">
                                <CiCalendar />
                                <p>25 de maio de 2024</p>
                            </li>
                            <li  className="event-local">
                                <HiOutlineMapPin />
                                <p> Centro de Convenções da Cidade </p>
                            </li>
                            <li className="event-description">
                                <p>A Conferência Anual de Tecnologia é um evento de destaque na indústria, reunindo profissionais e especialistas para discutir as últimas tendências e inovações em tecnologia.</p>
                            </li>
                        </ul>
                        <button> Inscreva-se <FaArrowTrendUp /> </button>
                    </div>
                </div>

                <div className="box-right">
                    <div className="event-image"> 
                        <Image src={event1} />

                    </div>
                </div>
            </div>
        

        </section>
    )
}

export default Events