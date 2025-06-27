import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import Footer from '../Footer/Footer';
import { FaArrowUp, FaMapMarkerAlt, FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'service_f0bzezo',
    'template_78cbtmm',
    form.current,
    '_hmMxIyR8O4-IkAZO'
  ).then(
    () => {
      alert('Message Sent Successfully!');
      form.current.reset();
    },
    () => {
      alert('Failed to send message.');
    }
  );
};


  return (
    <>
      <div className='contact' id='contact'>
        <div className='form-det'>
          <h1> Get in touch.</h1>
          <form ref={form} onSubmit={sendEmail} id='form'>
            <input type='text' name='from_name' placeholder=' Name' required />
            <input type='email' name='reply_to' placeholder=' Email' required />
            <textarea name='message' placeholder=' Message' required />
            <button type='submit'>Send Message</button>
          </form>
        </div>
        <div className='info-det'>
          <h3>
            I'm always happy to connect! Feel free to reach out for collaborations,<br /> job opportunities, or just to say hi.
          </h3>
          <p className='contact-link'><FaEnvelope /> <a href='mailto:farhaansiddiqui7861@gmail.com' target="_blank" rel="noopener noreferrer">farhaansiddiqui7861@gmail.com</a></p>
          <p className='contact-link'><FaMapMarkerAlt /> <a href='https://www.google.com/maps?q=Mumbai,+Maharashtra' target='_blank' rel='noopener noreferrer'>Mumbai, Maharashtra</a></p>
          <p className='contact-link'><FaInstagram /> <a href='https://www.instagram.com/farhansiddiqui_26/' target='_blank' rel='noopener noreferrer'>@farhansiddiqui_26</a></p>
          <p className='contact-link'><FaGithub /> <a href='https://github.com/farhansiddiquiX' target='_blank' rel='noopener noreferrer'>farhansiddiquiX</a></p>
        </div>
      </div>
      <div className='page'>
        <button className='scroll-top-btn' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaArrowUp />
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
