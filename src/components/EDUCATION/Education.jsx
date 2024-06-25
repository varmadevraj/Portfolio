import React from 'react'
import './education.css'
import education_data from '../../assets/Education'
const Education = () => {
  return (
    <div className="education">
        <div className="education-title">
            <h1>Education</h1>
        </div>
        <div className="education-container">
             {education_data.map((education,index)=>{
                return <div key={index} className="education-format">
                    <h2>{education.qualification}</h2>
                    <h3>{education.name}</h3>
                    <h4>{education.cgpa}</h4>
                    <h4>{education.marks}</h4>
                    <h5>{education.year}</h5>
                </div>
             })}
        </div>
    </div>
  )
}

export default Education
