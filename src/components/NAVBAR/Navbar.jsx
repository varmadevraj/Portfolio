import React, {useState} from 'react';
import './navbar.css';
import {Link} from 'react-scroll';
import contacting from '../../assets/contact.png';
import Menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu]= useState(false);
  return (
    <nav className="navbar">
      
      <h1 className="logo">Protfolio</h1>
      <div className="desktopMenu">
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-150} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Education</Link>
        
      </div>
      <button className="desktopMenuBtn" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contacting} alt="" className="desktopMenuImg"/>Contact Me</button>

      <img src={Menu} alt='Menu' className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
      <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-150} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='education' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Education</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar;
