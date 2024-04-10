'use client'
import "./Dashboard.css";
import { PiStudentBold } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiChalkboardTeacher } from "react-icons/pi";
import { PiBag } from "react-icons/pi";
import { useEffect } from "react";


function Dashboard() {

    useEffect(() => {
        const dashboardItems = document.querySelectorAll(".dashboard-item")
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle('show', entry.isIntersecting)
            })
        })

        console.log(dashboardItems)

        dashboardItems.forEach(dashboard => {
            observer.observe(dashboard)
        })
    }, [])

    return (
        <div className="dashboard-section">
            <div className="dashboard-item"> 
                <PiStudentBold />
                <div>
                    <h2> 500K +</h2>
                    <h3> Alunos </h3>
                </div>
            </div>
            <div className="dashboard-item"> 
                <PiBag />
                <div>
                    <h2> 100 +</h2>
                    <h3> Cursos </h3>
                </div>
            </div>
            <div className="dashboard-item"> 
                <PiChalkboardTeacher />
                <div>
                    <h2> 200 +</h2>
                    <h3> Professores </h3>
                </div>
            </div>
            <div className="dashboard-item"> 
                <LiaCertificateSolid />
                <div>
                    <h2> 20 +</h2>
                    <h3> Anos de Experiência </h3>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
