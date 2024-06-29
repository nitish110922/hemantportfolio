import React from 'react'
import "./contact.css"
import {FiMail} from 'react-icons/fi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adisrmc', 'template_rrn1a1e', form.current, 'XbYwiYgFI1yRJybmQ');

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <span className='contact-icon'><FiMail/></span>
            <h4>Email</h4>
            <h5>jangid.h4004@gmail.com</h5>
            <a href="mailto:jangid.h4004@gmail.com" target="_blank">Send a mail</a>
          </article>
          <article className='contact__option'>
            <span className='contact-icon'><AiOutlineLinkedin/></span>
            <h4>Linkedin</h4>
            <h5>Hemant Jangid</h5>
            <a href="https://www.linkedin.com/in/hemant-jangid-9a4b93255/" target="_blank">Send a message</a>
          </article>
        </div>

        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Full Name' required/>
          <input type="email" name="email" placeholder='Email Address' required/>
          <textarea name="message" placeholder='Message' rows="5" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact