import React from 'react';
import './skills.css';
import bg from '../../assets/varma.jpeg';

const Skills = () => {
  return (
    <div className="about">
        <div className="about-title">
            <h1>About Me</h1>
        </div>
        <div className="about-sections">
            <div className="about-para">
                <p>I am an experienced frontend Developer. I have the kowledge on Skills like HTML, CSS, JavaScript, React Js, Angular, AWS.</p>
                <p>my passion for frontend development is not only reflected in my experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Angular</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>AWS</p><hr style={{width:"50%"}}/></div>
            </div>
        </div>
    </div>
  )
}

export default Skills;
