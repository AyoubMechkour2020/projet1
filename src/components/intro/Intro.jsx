import React from 'react';
import ME from '../../assets/ay.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      
      <h1>About Me</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
          </div>
          <h4>
Throughout this year as an IT engineering student at ENSA Eljadida, I have gained invaluable knowledge and experience in the tech industry. The comprehensive curriculum and hands-on learning opportunities have allowed me to build projects from the ground up and expand my proficiency in various programming languages.

The academic program at ENSA Eljadida provided me with a solid foundation in IT engineering. I have delved into a wide range of subjects, including software development, computer networks, databases, algorithms, and system architecture. The courses have equipped me with the necessary theoretical understanding to approach complex technological challenges.

Furthermore, the practical aspect of my education has been paramount to my growth. By engaging in project-based learning, I have gained real-world experience in applying my skills to develop innovative solutions. Building projects from scratch has been an invaluable experience that has honed my problem-solving abilities, fostered creativity, and enhanced my technical skills. </h4>
          
        </div>
      </div>
    </section>
  )
}

export default Intro