import React from 'react'
import './Exp.css'
import ProgressBar from '../ProgressBar/ProgressBar'
const Exp = () => {
  return (
    <div className='exp' id='resumes'>
      <div className='education'>
        <div className='edu-title'>
            <h3>EDUCATION</h3>
        </div>
        <div className='edu-desc'>
            <div>
                <h4>Bachelor of Science in Information Technology</h4>
                <p><i>L. S. Raheja College</i> •  August 2022 – March 2025</p>
                <p>CGPA: 9.1</p>
            </div>
            <div>
                <h4>HSC (12th Grade)</h4>
                <p><i>L. S. Raheja College</i> •  August 2020 - March 2022</p>
                <p>Percentage – 66.33 %</p>
            </div>
            <div>
                <h4>SSC (10th Grade)</h4>
                <p><i>M.J.D. High School</i> •  June 2009 - March 2020</p>
                <p>Percentage – 80.00 %</p>
            </div>
        </div>
      </div><hr />
      <div className='extra'>
        <div className='extra-title'>
            <h3>ACTIVITIES</h3>
        </div>
        <div className='extra-desc'>
            <div>
                <h4>Perfect 10 SGPA</h4>
                <p>Achieved a perfect 10 SGPA in the 6th semester, reflecting consistent academic excellence and dedication.</p>
            </div>
            <div>
                <h4>Top Scorer in Mathematics (School Level)</h4>
                <p>Secured the highest marks in Mathematics in SSC at the school level, demonstrating strong analytical and problem-solving skills.</p>
            </div>
        </div>
      </div><hr />
      { /* <div className='work'>
        <div className='work-title'>
            <h3>WORK</h3>
        </div>
        <div className='work-desc'>
            <div>
                <h4>Masters in Water tasting</h4>
                <p><i>Clown college</i> • April 2007</p>
                <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
            </div>
            <div>
                <h4>Masters in Juice tasting</h4>
                <p><i>Clown college</i> • April 2007</p>
                <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>
            </div>
        </div>
      </div><hr /> */}
      <div className='skills'>
        <div className='skills-title'>
          <h3>SKILLS</h3>
        </div>
        <div className='skills-desc'>
          <p><b>A quick overview of my core frontend skills, tools I use frequently, and a glimpse of technologies I’ve explored during college.</b></p>
          <div className='skills-set1'>
            <div>
              <h2>Frontend</h2>
              <ProgressBar label='HTML / CSS' percent={90}/>
              <ProgressBar label='JavaScript' percent={85}/>
              <ProgressBar label='React.js' percent={80}/>
            </div>
            <div>
              <h2>Backend / Database</h2>
              <ProgressBar label='PHP' percent={60}/>
              <ProgressBar label='MySQL' percent={65}/>
            </div>
          </div>
          <div className='skills-set2'>
            <div>
              <h2>Tools</h2>
              <ProgressBar label='Git / GitHub' percent={80}/>
              <ProgressBar label='PhpMyAdmin' percent={60}/>
              
            </div>
            <div>
              <h2>Soft Skills</h2>
              <ProgressBar label='Communication' percent={90}/>
              <ProgressBar label='Presentation' percent={85}/>
              <ProgressBar label='Management' percent={80}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exp
