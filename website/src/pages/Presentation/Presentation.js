import "./Presentation.css";
import assetPresentation from "../../assets/asset-presentation.svg"
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";

function Presentation() {
  return (
    <div className="presentation-section global-section">
        <div className="presentation-info">
            <div className="presentation-title">
                <h4 className="global-title"> SOBRE </h4>
                <p className="global-subtitle"> Nome da Empresa </p>
                <div className="divider"> </div>
            </div>

            <div className="presentation-content">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. 
                    
                    <br></br>
                    <br></br> 
                    
                    It was popularised in the 1960s
                    with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus
                    PageMaker including versions of Lorem Ipsum.
                </p>

                <a> SAIBA MAIS <IoIosArrowRoundForward /> </a>
            </div>
        </div>

        <div className="presentation-image">
            <Image src={assetPresentation} />
        </div>
    </div>
  );
}

export default Presentation;
