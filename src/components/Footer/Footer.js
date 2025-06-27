import React from 'react'
import './Footer.css'
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { SiStackoverflow } from 'react-icons/si';
const Footer = () => {
  return (
    <div className='footer'>
        <div className='links'>
            <a href='https://github.com/farhansiddiquiX' target="_blank" rel="noopener noreferrer"><FaGithub size={20}/></a>
            <a href='https://www.linkedin.com/in/farhan-siddiqui7/' target="_blank" rel="noopener noreferrer"><FaLinkedin size={20}/></a>
            <a href='https://www.instagram.com/farhansiddiqui_26/' target="_blank" rel="noopener noreferrer"><FaInstagram size={20}/></a>
            <a href='https://x.com/farhansiddiquiX' target="_blank" rel="noopener noreferrer"><FaTwitter size={20}/></a>
        </div>
        <p>© Copyright 2025 Farhan Siddiqui</p>
    </div>
  )
}

export default Footer
