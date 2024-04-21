import { IoMdSend } from "react-icons/io"
import "./Events.css"
import Image from "next/image"
import { CiCalendar } from "react-icons/ci";
import { HiOutlineMapPin } from "react-icons/hi2";
import { FaArrowTrendUp } from "react-icons/fa6";
import { events } from "@/database/_dataEvents";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

function Events(){

    const [currentSlide, setCurrentSlide] = useState(0);
    
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % events.length);
    };
    
    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + events.length) % events.length);
    };


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
                <div className="events-carousel" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {events.map((item, index) => (
                        <div key={index} className="event-item">
                            <div className="button-slide button-left" onClick={() => prevSlide()}>
                                <IoIosArrowBack />
                            </div>

                            <div className="box-left">
                                <h4 className="event-title">
                                    {item.title}
                                </h4>

                                <ul>
                                    <li className="event-date">
                                        <CiCalendar />
                                        <p>{item.date}</p>
                                    </li>
                                    <li  className="event-local">
                                        <HiOutlineMapPin />
                                        <p> {item.local} </p>
                                    </li>
                                    <li className="event-description">
                                        <p>{item.description}</p>
                                    </li>
                                </ul>
                                <button> Inscreva-se <FaArrowTrendUp /> </button>
                            </div>

                            <div className="box-right">
                                <div className="event-image"> 
                                    {item.image}
                                </div>
                            </div>

                            <div className="button-slide button-right" onClick={()=> nextSlide()}>
                                <IoIosArrowForward />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        

        </section>
    )
}

export default Events