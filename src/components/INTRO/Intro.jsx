import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Varma DevRaj</span> <br/> Frontend Developer </span>
        <p className="introPara"> I am a skilled web designer with experience in creating visually appealing and user friendly websites.</p>
        <Link><button className='btn' href="https://drive.google.com/file/d/1kx-4E07Cddp53caU5I8-v7G5dcCvVUSB/view?usp=drivesdk"><h3>Resume</h3> </button></Link>
      </div>
    </section>
  )
}

export default Intro;
