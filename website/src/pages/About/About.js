import "./About.css"
import assetPeople from "../../assets/about/asset-people.jpg"
import Image from "next/image"
function About(){
    return (
        <section className="about-section">
            <div className="about-title">
                <h2>QUEM NÓS SOMOS ?</h2>
            </div>

            <div className="about-content"> 
                <div className="about-text">
                    
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                         specimen book. It has survived not only five centuries, but also the leap into
                         electronic typesetting, remaining essentially unchanged. It was popularised in
                         the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                         and more recently with desktop publishing software like Aldus PageMaker
                         including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is 
                         not simply random text. It has roots in a piece of classical Latin literature 
                         from 45 BC, making it over 2000 years old. 
                    </p>

                    <p>
                        <strong> Ricardo Alencar </strong><br />
                        <span>Diretor</span>
                    </p>
                    <div className="aspa-left"> “ </div> 
                    <div className="aspa-right"> ”</div> 
                </div>

                <div className="about-image"> 
                    <Image src={assetPeople}/>
                    <div className="background-1"></div>
                    <div className="background-2"></div>
                </div>
            </div>
            
        </section>
    )
}

export default About