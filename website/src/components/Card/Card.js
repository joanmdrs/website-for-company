import "./Card.css";
import { FiClock } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

function Card({ 
    image, 
    title, 
    subtitle, 
    description, 
    duration,
    lessons, 
    price }) {

    const limitText = (text, maxLength) => {
        return text.slice(0, maxLength) + "...";
    }

    return (
        <div className="component-card">
            <div className="card-image"> 
                {image}
            </div>       

            <div className="card-description">
                <h3> { limitText(title, 50)} </h3>
                <p>  { limitText(description, 100)} </p>
            </div>

            <div className="card-footer">
                <div className="card-details"> 
                    <p>
                        <FiClock/> {duration}
                    </p>
                    <p>
                        <IoDocumentTextOutline/> {lessons} atividades
                    </p>
                </div>
                <div className="card-price">
                    $ {price}
                </div>
            </div>
            
        </div>
    );
}

export default Card;
