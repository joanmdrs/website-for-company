import "./Card.css";
import { IoSchool } from "react-icons/io5";
import { FaChalkboardUser } from "react-icons/fa6";

function Card({ image, title, subtitle, description, formation, modality }) {
    return (
        <div className="component-card">
            <div className="card-image"> 
                {image}
                <a className="learn-more-link">SAIBA MAIS</a>
            </div>

            <div> 
               
            </div>

            <div className="card-title">
                <h4> {title} </h4>
            </div>

            <div className="card-description">
                <h4> {subtitle} </h4>
                <p>  {description} </p>
            </div>

            <div className="card-footer">
                <span className="item-footer"> <IoSchool fontSize="20px" /> {formation} </span>
                <span className="item-footer"> <FaChalkboardUser fontSize="20px" /> {modality} </span>
            </div>
        </div>
    );
}

export default Card;
