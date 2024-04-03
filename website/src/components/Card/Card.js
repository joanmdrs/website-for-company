import "./Card.css";
import { IoSchool } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";

function Card({ image, title, subtitle, description, formation, modality }) {
    return (
        <div className="component-card">
            <div className="card-image"> 
                {image}
                <div className="card-title">
                    <h4> {title} </h4>
                </div>
            </div>       

            <div className="card-description">
                <h4> {subtitle} </h4>
                <p>  {description} </p>
            </div>
            
        </div>
    );
}

export default Card;
