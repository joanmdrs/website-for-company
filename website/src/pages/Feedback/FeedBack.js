import Image from "next/image"
import "./FeedBack.css"
import { BsYoutube } from "react-icons/bs";
import student1 from "../../assets/feedbacks/student-1.jpg"
import student2 from "../../assets/feedbacks/student-2.jpg"
import student3 from "../../assets/feedbacks/student-3.jpg"
import student4 from "../../assets/feedbacks/student-4.jpg"


function Feedback (){

    const feedbacks = [
        
        {
            image: <Image src={student1} />,
            comment: "Lorem Ipsum is simply dummy text of the printi.",
            autor: "Bruno Oliveira"
        },
        {
            image: <Image src={student2}/>,
            comment: "Lorem Ipsum is simply dummy text of the printi.",
            autor: "Bruno Oliveira"
        },
        {
            image: <Image src={student3} />,
            comment: "Lorem Ipsum is simply dummy text of the printi.",
            autor: "Bruno Oliveira"
        },
        {
            image: <Image src={student4} />,
            comment: "Lorem Ipsum is simply dummy text of the printi.",
            autor: "Bruno Oliveira"
        }
    ]

    return (
        <section className="feedback-section">
            <div className="feedback-title"> 
                <h2> O QUE NOSSOS <span> ALUNOS </span> DIZEM SOBRE NÓS</h2>
            </div>

            <div className="feedback-content">
                {feedbacks.map((feedback, index) => (
                    <div key={index} className="feedback-item"> 
                        <div className="feedback-image"> 
                            {feedback.image}
                        </div>
                        <div className="feedback-details"> 
                            <div> {feedback.comment} </div>
                            <div> {feedback.autor} </div>
                            <div>
                                <BsYoutube color="red" /> 
                                Assista no YouTube
                            </div>
                        </div>
                    </div>
                ))}
                

                
            
            </div>
        </section>
    )
}

export default Feedback