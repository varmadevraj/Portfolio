import React, { useRef } from 'react';
import './contact.css';
import Instagram from '../../assets/instagram.png';
import youtube from '../../assets/youtube.png';
import Github from '../../assets/Github.png';
import Linkedin from '../../assets/Linkedin.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_17z5git', 'template_79livvg', form.current, 'SW8ZkwSf1BOLFzQ1W')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
        },(error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Get in touch with this form</span>

            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="text" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name="message"  rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Instagram} alt="" className="link" />
                    <img src={youtube} alt="" className="link" />
                    <img src={Github} alt="" className="link1" />
                    <img src={Linkedin} alt="" className="link1" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact;
