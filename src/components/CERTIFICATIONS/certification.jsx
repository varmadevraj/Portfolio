import React from 'react'
import { CertificationDetails } from './constants'
import './certification.css';
import { Link } from 'react-router-dom';


const Certification = () => {
  return (
    <div className='certificateContainer' id="certifications">
        <h1 className="certificationTitle">Certifications</h1>
        {CertificationDetails.map((details,ind)=>(
        <Link className='certificationName' to={details && details?.toLink} key={ind}>{details.name}</Link>
      ))}
    </div>
  )
}

export default Certification
