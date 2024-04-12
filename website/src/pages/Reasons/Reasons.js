'use client'
import "./Reasons.css";
import Image from "next/image";
import { motivos } from "./data/dataReasons";
import { useEffect } from "react";

function Reasons() {

    useEffect(() => {
        const reasonsItems = document.querySelectorAll(".item-content")
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting)
            })
        })


        reasonsItems.forEach(reason => {
            observer.observe(reason)
        })
    }, [])


    return (
        <section className="reasons-section">
            <div className="reasons-title">
                <h2>
                    POR QUÊ <span>VOCÊ</span> DEVE NOS ESCOLHER ?
                </h2>
                <p> 
                    Em nossa instituição, estamos comprometidos em proporcionar uma experiência educacional excepcional que vai além das salas de aula. 
                </p>
            </div>

            <div className="reasons-content">
                {motivos.map((motivo, index) => (
                    <div key={index} className="item-content">
                        <div className="item-img">{motivo.image}</div>
                        <div className="item-title">
                            <h3> {motivo.title} </h3>
                        </div>

                        <div className="item-description">
                            <p> {motivo.description} </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reasons;
