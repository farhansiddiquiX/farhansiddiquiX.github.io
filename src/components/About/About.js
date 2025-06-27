import React from 'react'
import './About.css'
import { FaMapMarkerAlt, FaFlag, FaGraduationCap, FaCalendarAlt, FaMagic, FaBuilding } from 'react-icons/fa';
const About = () => {
  return (
    <div className='about-container' id='about'>
      <div className='img-cont'>
        <img src='/Images/Me.jpg' height="140px" width="130px"/>
      </div>
      <div className='text-cont'>
        <div className='title'>
            <h2>About me</h2>
            <p>I’m a B.Sc. IT graduate from <strong>L. S. Raheja College</strong>, with a strong focus on frontend<br /> development and a passion for building modern, user-friendly web applications.</p>
<p>I specialize in <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>HTML</strong>, and <strong>CSS</strong>, and have worked<br /> with <strong>Git</strong>, <strong>GitHub</strong>, <strong>MySQL</strong>, and <strong>PHP</strong>.</p>
<p>I enjoy learning new technologies, solving real-world problems through code, and<br /> collaborating with teams to create clean, responsive designs.</p>
<p>I’m currently looking for opportunities where I can contribute my skills, continue <br />learning, and grow as a frontend developer.</p>
        </div>
        <div className='section'>
          <div>
            <p><FaMapMarkerAlt /> <strong>Location:</strong> Mumbai, Maharashtra</p>
            <p><FaFlag /> <strong>Nationality:</strong> Indian</p>
            <p><FaGraduationCap /> <strong>Study:</strong> B.Sc. in Information Technology (CGPA 9.1)</p>
          </div>
          <div>
            <p><FaCalendarAlt /> <strong>Age:</strong> 20</p>
            <p><FaMagic /> <strong>Interests:</strong> Frontend Development, Learning new frameworks,<br /> Building real-world projects, Motorcycles, Online Gaming, Cricket</p>
            <p><FaBuilding /> <strong>College:</strong> L.S. Raheja College</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
