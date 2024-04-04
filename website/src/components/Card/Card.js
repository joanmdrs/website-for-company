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

    return (
        <div className="component-card">
            <div className="card-image"> 
                {image}
                <div className="card-fundo"></div>
                <div className="card-title">
                    <h4> {title} </h4>
                </div>
            </div>       

            <div className="card-description">
                <h4> {subtitle} </h4>
                <p>  {description} </p>
            </div>

            <div className="card-footer">
                <div className="card-details"> 
                    <p>
                        <FiClock/> {duration}
                    </p>
                    <p>
                        <IoDocumentTextOutline/> {lessons}
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
