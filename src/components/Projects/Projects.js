import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      img: '/Images/project1.png',
      title: 'CareerCraft',
      desc: 'A secure career management platform with OTP login, resume builder (download & email), skill-based assessments, interview prep, in-house job search, and course recommendations — built with PHP & MySQL.',
      github: 'https://github.com/farhansiddiquiX/CareerCraft'
    },
    {
      img: '/Images/project2.png',
      title: 'Youtube-Clone',
      desc: 'A YouTube clone built with React, using a public API to fetch videos, views, and likes. PC-only version; responsive design and comments integration are planned improvements.',
      github: 'https://github.com/farhansiddiquiX/Youtube-Clone'
    },
  ];

  return (
    <div className='projects' id='portfolio'>
      <div className='text'>
        <h2><b>Check out some of my work</b></h2>
      </div>
      <div className='grid'>
        {projects.map((p, i) => (
          <div className='card' key={i}>
            <img src={p.img} alt={p.title} />
            <div className='overlay'>
              <button
                className='github-btn'
                onClick={() => window.open(p.github, '_blank', 'noopener')}
              >
                <FaGithub />
              </button>
              <div className='content'>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
