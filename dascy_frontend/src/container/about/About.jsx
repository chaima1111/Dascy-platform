import React from 'react'
import './about.css'

import star from '../../assets/Star-Circle--Streamline-Plump2.png';
import global from '../../assets/global-learning--global-learning-education.png';
import task from '../../assets/Task-List-Edit--Streamline-Plump1.png';
import head from '../../assets/Intellectual--Streamline-Plump1.png';

const About = () => {
  return (
    
      <div className='dascy__about-start'>
        <div className='dascy__about-start_title'>
        <h1> 
          <span>Start your</span> 
          <span className='label1'> journey </span> 
          <span>to academic</span> 
          <span className='label2'> excellence </span>
        </h1>
        </div>
        <div className='dascy__about-start_content'>
        <p> 
          <span className='label3'> DASCY </span>
          <span> is now- your go-to e-learning platform for simplifying </span>
          <p>complex topics with engaging content and interactive quizzes.</p>
        </p>
        </div>
        <div className='dascy__about-start_content2'>
        <div className='dascy__about-start_text'>
          <div className='image'>
            <img src={star} alt="star" />
          </div>
          <div className='textblock text_margin'>Progress Tracking</div>
          <div>
            <p className='font'>Stay on top of your studies <br /> effortlessly with our simple <br /> progress tracker.</p>
          </div>
        </div>
          <div className='dascy__about-start_text'>
            <div>
              <img src={global} alt="rise" />
            </div>
            <div className='textblock'> Trusted by Many </div>
            <div>
              <p className='font'>Join thousands of students <br /> worldwide who trust us for clear <br />learning and success.</p>
            </div>
          </div>
          <div className='dascy__about-start_text'>
            <div>
              <img src={task} alt="task" />
            </div>
            <div className='textblock'> Self-Evaluation </div>
            <div>
              <p className='font'>Assess your understanding to <br />identify areas to improve and <br /> boost your learning journey.</p>
            </div>
          </div>
          <div className='dascy__about-start_text'>
            <div>
              <img src={head} alt="head" />
            </div>
            <div className='textblock'>Simplified Lessons</div>
            <div>
              <p className='font'>We create easy-to-understand <br />lessons so you can grasp even <br /> the toughest subjects easily.</p>
            </div>
          </div>
        </div>
      </div>  
  )
}

export default About
