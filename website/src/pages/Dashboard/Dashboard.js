import "./Dashboard.css";
import img from "../../assets/asset-background-dashboard.jpg";
function Dashboard() {
    return (
        <div className="dashboard-section">
            <div className="dashboard-content">

                <div className="item-dashboard"> 
                    <div className="container-animation">
                        <h2> 60 </h2>
                        <h2> 60 </h2>
                    </div>

                    <div className="metric"> 
                        Professores
                    </div>
                </div>

                <div className="item-dashboard"> 
                    <div className="container-animation">
                        <h2> +1K </h2>
                        <h2> +1K </h2>
                    </div>

                    <div className="metric"> 
                        Alunos
                    </div>
                </div>
                
                <div className="item-dashboard"> 
                    <div className="container-animation">
                        <h2> 12 </h2>
                        <h2> 12 </h2>
                    </div>

                    <div className="metric"> 
                        Cursos
                    </div>
                </div>

                <div className="item-dashboard"> 
                    <div className="container-animation">
                        <h2> 20 </h2>
                        <h2> 20 </h2>
                    </div>

                    <div className="metric"> 
                        Anos de Experiência
                    </div>
                </div>

            
            </div>
        </div>
    );
}

export default Dashboard;
