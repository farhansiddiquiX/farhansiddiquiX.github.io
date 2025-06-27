import React from 'react'
import './Main.css'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { SiStackoverflow } from 'react-icons/si';
import Navbar from '../Navbar/Navbar';
import { href } from 'react-router-dom';
const Main = () => {
  return (
    <div className='bg' id='main'>
      <div className='head'>
        <h1>I'm Farhan Siddiqui.</h1>
        <p>I’m a Mumbai-based Frontend Developer passionate about building modern, responsive web interfaces using JavaScript, React.js, HTML, and CSS.
            <br />I recently developed CareerCraft, a job and career portal for students to explore internships, create resumes, and apply for jobs.</p>
        <p>I’m eager to contribute to real-world projects, learn from professionals, and continuously improve my skills.</p><br />
        <div className='links'>
          <a href='https://github.com/farhansiddiquiX' target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
          <a href='https://www.linkedin.com/in/farhan-siddiqui7/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
          <a href='https://www.instagram.com/farhansiddiqui_26/' target="_blank" rel="noopener noreferrer"><FaInstagram size={20}/></a>
          <a href='https://x.com/farhansiddiquiX' target="_blank" rel="noopener noreferrer"><FaTwitter size={20}/></a>
        </div>
        <div className='buttons'>
          <a href="/Resume.pdf" download target='_blank' rel='noopener noreferrer'>
            <button id='resume'>
              Resume <span id='download'><FiDownload /></span>
            </button>
          </a>
          <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Contact</button>
        </div>
      </div>
    </div>
  )
}

export default Main
