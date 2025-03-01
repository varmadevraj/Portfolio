import React from 'react';
import './intro.css';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Varma DevRaj</span> <br/> Frontend Developer </span>
        <p className="introPara"> I am a skilled web developer with experience in creating visually appealing and user friendly websites.</p>
        
        <a className='btn' href="https://drive.google.com/file/d/12zVI-95Wz-vYn78Phfl2kBt7x10NbY9M/view" >
        Resume </a>
        
      </div>
    </section>
  )
}

export default Intro;
