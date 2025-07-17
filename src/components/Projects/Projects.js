import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
  {
    img: '/Images/project1.png',
    title: 'CareerCraft',
    desc: 'A secure career management platform with OTP login, resume builder, skill-based assessments, interview prep, in-house job search, and course recommendations — built with PHP & MySQL.',
    github: 'https://github.com/farhansiddiquiX/CareerCraft'
  },
  {
    img: '/Images/project2.png',
    title: 'Youtube-Clone',
    desc: 'A YouTube clone built with React using the YouTube API to fetch videos, views, and likes. PC-only version; responsive design planned.',
    github: 'https://github.com/farhansiddiquiX/Youtube-Clone'
  },
  {
    img: '/Images/project3.png',
    title: 'InstaPDF',
    desc: 'A fully responsive React app to convert and merge images into crisp, high-quality PDFs directly in your browser. Fast, drag-and-drop, no install needed.',
    github: 'https://github.com/farhansiddiquiX/InstaPDF'
  },
  {
    img: '/Images/project4.png',
    title: 'LinkSnap',
    desc: 'A fully responsive React app to shorten long URLs into clean, shareable links instantly. No sign-up required, ready to use.',
    github: 'https://github.com/farhansiddiquiX/LinkSnap'
  },
  {
    img: '/Images/project5.png',
    title: 'Newsly',
    desc: 'A fully responsive React app to browse the latest news by category in a clean, card-based layout using live API integration.',
    github: 'https://github.com/farhansiddiquiX/Newsly'
  },
  {
    img: '/Images/project6.png',
    title: 'Qreate',
    desc: 'A fully responsive React app that generates high-resolution QR codes for URLs, Wi-Fi, and contacts, with smooth transitions and downloads.',
    github: 'https://github.com/farhansiddiquiX/Qreate'
  },
  {
    img: '/Images/project7.png',
    title: 'QuickPix',
    desc: 'A fully responsive React app to search, view, and download high-resolution photos from Unsplash in a clean, minimalist interface.',
    github: 'https://github.com/farhansiddiquiX/QuickPix'
  },
  {
    img: '/Images/project8.png',
    title: 'BiteBrowse',
    desc: 'A fully responsive HTML, CSS, and JavaScript app to search meals by name or ingredient and view recipes using TheMealDB API.',
    github: 'https://github.com/farhansiddiquiX/BiteBrowse'
  }
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
