'use client'
import "./FeedBack.css"
import { AiOutlinePlayCircle } from "react-icons/ai";
import React, { useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { feedbacks } from "./_data/feedback";

function Feedback(){

    const [feedbackEmphasis, setFeedbackEmphasis] = useState(feedbacks[0])

    const renderStars = (score) => {
        const stars = [];
        const maxScore = 5; // Define a pontuação máxima possível (você pode ajustar conforme necessário)
        for (let i = 0; i < maxScore; i++) {
            // Verifica se o índice atual é menor que o score, e adiciona uma estrela preenchida.
            // Caso contrário, adiciona uma estrela vazia.
            if (i < score) {
                stars.push(<FaStar key={i} />);
            } else {
                stars.push(<FaStar key={i} style={{ opacity: 0.5 }} />); // Estrela vazia com opacidade reduzida
            }
        }
        return stars;
    };

    return (
        <section className="feedback-section">
            <div className="feedback-header"> 
                <h2> O QUE NOSSOS <span> ALUNOS </span> DIZEM SOBRE NÓS</h2>
                <p>
                Aqui na nossa seção de depoimentos, você encontrará experiências autênticas compartilhadas por aqueles que já fazem parte da família.
                </p>
            </div>

            <div className="feedback-content">  

                <div className="feedback-emphasis">
                    {feedbackEmphasis.image}
                    <div className="icon-play">
                        <AiOutlinePlayCircle />
                    </div>
                </div>

                <div> 
                    <div className="feedback-info">
                        <h3 className="feedback-autor"> {feedbackEmphasis.autor} </h3>
                        <h4 className="feedback-course"> {feedbackEmphasis.course}  </h4>
                        <div className="feedback-stars">
                            {renderStars(feedbackEmphasis.score)}
                        </div>
                        <h4 className="feedback-title"> {feedbackEmphasis.title} </h4>
                        <p className="feedback-comment"> {feedbackEmphasis.comment} </p>
                    </div> 
                    <div className="other-feedbacks">
                        {feedbacks.map(item => (
                            <div className="feedback-item" onClick={() => setFeedbackEmphasis(item)}>
                                <div className="box-image">
                                    {item.image}
                                </div>
                                <div className="box-autor">
                                    <h5> {item.autor} </h5>
                                    <h6> {item.course} </h6>
                                </div>
                            </div>
                        ))}
                    </div> 
                </div>
                

                
            
            </div>
        </section>
    )
}

export default Feedback