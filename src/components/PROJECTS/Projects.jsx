import React from 'react'
import "./projects.css"
import projects_Data from "../../assets/projects_data"
import arrow from "../../assets/arrow_icon.svg"
const Projects = () => {
  return (
    <div className="projects">
        <div className="project-title">
            <h1>Projects</h1>
        </div>
        <div className="projects-container">
             {projects_Data.map((project,index)=>{
                return <div key={index} className="projects-format">
                    <h3>{project.p_no}</h3>
                    <h2>{project.p_name}</h2>
                    <p>{project.p_desc}</p>
                    <div className="projects-readmore">
                        <p>Read More</p>
                        <img src={arrow} alt="" />
                    </div>
                </div>
             })}
        </div>
    </div>
  )
}

export default Projects
