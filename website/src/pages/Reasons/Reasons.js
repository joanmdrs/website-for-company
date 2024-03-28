import "./Reasons.css"
import asset1 from "../../assets/reasons/1.png"
import asset2 from "../../assets/reasons/2.png"
import asset3 from "../../assets/reasons/3.png"
import Image from "next/image"

function Reasons(){
    const motivos = [
        {   
            image: <Image src={asset1} width={150} />,
            title: "Excelência Acadêmica",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: <Image src={asset2} width={150}/>,
            title: "Desenvolvimento Profissional",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            image: <Image src={asset3} width={150}/>,
            title: "Comunidade integrada",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
    ]
    return (
        <div className="page-reasons global-section"> 
            <div className="reasons-title"> 
                <h2> NOSSOS DIFERENCIAIS </h2>
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
        </div>
    )
    
}

export default Reasons 