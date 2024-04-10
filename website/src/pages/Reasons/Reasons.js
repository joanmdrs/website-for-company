import "./Reasons.css"
import assetAcademicExcelence from "../../assets/reasons/academic-excellence.png"
import assetProfessionalDevelopment from "../../assets/reasons/professional-development.png"
import assetIntegratedCommunity from "../../assets/reasons/integrated-community.png"

import Image from "next/image"

function Reasons(){
    const motivos = [
        {   
            image: <Image src={assetAcademicExcelence} width={100} />,
            title: "Excelência Acadêmica",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: <Image src={assetProfessionalDevelopment} width={100}/>,
            title: "Desenvolvimento Profissional",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: <Image src={assetIntegratedCommunity} width={100}/>,
            title: "Comunidade integrada",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]
    return (
        <section className="reasons-section"> 
            <div className="reasons-title"> 
                <h2> POR QUÊ <span>VOCÊ</span> DEVE NOS ESCOLHER ? </h2>
            </div>
          
            <div className="reasons-content"> 
                {
                    motivos.map((motivo, index) => (
                        <div key={index} className="item-content">   
                            <div>
                                {motivo.image}
                            </div>
                            <div className="item-title">
                                <h3> {motivo.title} </h3>
                            </div>

                            <div className="item-description">
                                <p> {motivo.description} </p>
                            </div>
                            <div class="border-top"></div>
                            <div class="border-bottom"></div>
                            <div class="border-left"></div>
                            <div class="border-right"></div>


                        </div>
                    ))
                }
            </div>
        </section>
    )
    
}

export default Reasons 