import React, { useState, useEffect } from 'react';
import './Navbar.css';

const sections = ['about', 'resumes', 'portfolio', 'testimonials', 'contact'];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <button
        className='hamburger'
        onClick={() => setMenuOpen(prev => !prev)}
      >
        &#9776;
      </button>
      <div className={`nav ${menuOpen ? 'show' : ''}`}>
        {sections.map(sec => (
          <a
            key={sec}
            href={`#${sec}`}
            className={activeSection === sec ? 'active' : ''}
            onClick={() => setMenuOpen(false)} // auto-close on click
          >
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>
    </>
  );
}
