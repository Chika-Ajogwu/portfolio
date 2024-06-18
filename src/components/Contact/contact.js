import React, { useRef } from 'react'
import './contact.css'
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';

import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import WhatsappIcon from '../../assets/whtatsapp-icon.png';
import GithubIcon from '../../assets/github2.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_pxx2cvi', 'template_50f82qs', form.current, {
            publicKey: 'CWf63p85jk26ZQ7DO',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              alert('SUCCESSFUL! EMAIL SENT');
              e.target.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    
  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className='contactPageTitle'>My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies.
                Some of the notable companies i have worked with includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="facebook" className="clientImg" />
                <img src={Adobe} alt="twitter" className="clientImg" />
                <img src={Microsoft} alt="youtube" className="clientImg" />
                <img src={Facebook} alt="instagram" className="clientImg" />
            </div>
        </div>

        <div id="contact">
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type="text" className='name' placeholder='Your name' name="name" required/>
            <input type="email" className='email' placeholder='Your email' name="email" required/>
            <textarea className='msg' name="message" rows="5" placeholder='Your message' required></textarea>
            <button type='submit' value="Send" className="submitBtn">Submit</button>

            <div className="links">
                <img src={FacebookIcon} alt="" className="link" />
                <img src={TwitterIcon} alt="" className="link" />
                <img src={WhatsappIcon} alt="" className="link" />
                <img src={GithubIcon} alt="" className="link" />
            </div>
        </form>
        </div>
    </section>
  );
}

export default Contact;