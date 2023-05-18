import React from 'react';
import IMG1 from '../../assets/python.png';
import IMG2 from '../../assets/pharmacie.jpg';
import IMG3 from '../../assets/laravel.png';
import IMG4 from '../../assets/cyber.jpg';
import IMG5 from '../../assets/ace metal.jpg';
import IMG6 from '../../assets/bibliotheque.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Shortest path',
      img: IMG1,
      description:
        "I created a desktop app that finds the shortest path for distributing files among Casablanca's stations. It optimizes the process, saving time and resources. Users input station locations and file details, and the app calculates the most efficient route. It simplifies planning and execution, particularly for large-scale operations",
      technologies: 'python',
    
    },
    {
      id: 2,
      title: 'pharmacies localisation',
      img: IMG2,
      description:
        'I have developed a web application that enables users to locate pharmacies in the city of El Jadida. This application provides a convenient way to find nearby pharmacies and access important information about their locations. By inputting their current location or desired area, users can quickly identify the nearest pharmacies in El Jadida, making it easier to access medication and healthcare services when needed ',
      technologies: 'reactjs | node js | express js',
      
    },
    {
      id: 3,
      title: 'Facility and Equipment Management: Efficiently Managing Spaces and Machines',
      img: IMG3,
      description: "I've developed a web application for universities to efficiently manage their classrooms and machines. This application simplifies the process of organizing and scheduling the usage of various facilities on campus. It allows administrators to easily allocate classrooms and machines to different courses or activities, ensuring optimal utilization of resources",
      technologies: 'php | laravel',
      
    },
    {
      id: 4,
      title: 'Enhancing the cybersecurity measures of the ENSAJ website to ensure a secure online environment',
      img: IMG4,
      description:
        'We performed a thorough vulnerability analysis, conducted penetration testing, and implemented necessary fixes to enhance the security of our website, TRI. Our proactive approach ensures the website is protected against potential threats and unauthorized access.',
      
 
    },
    {
      id: 5,
      title: 'wordpress website',
      img: IMG5,
      description:
        'we created a professional WordPress website for Ace Metal, a metal fabrication company. The website showcases their services, products, and expertise, providing a seamless browsing experience. It helps Ace Metal establish an online presence and attract more clients',
      technologies: 'JavaScript | CSS',
     
    },
    {
      id: 6,
      title: 'Library Application: Streamlining Library Management Processes',
      img: IMG6,
      description:
        ' The web application offers a comprehensive solution for handling various tasks in a library. It allows librarians and staff to easily manage member details, such as registration, membership status, and contact information. Additionally, the application provides features for cataloging books, including recording book information, categorizing them based on genres or subjects, and updating availability status',
      technologies: 'Java',
  
    },
  ];

  return (
    <section id="portfolio">
    
      <h1>Projects</h1>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h2 style={{color:"hwb(183 27% 17%)"}}>{pro.title}</h2>
              <h3>{pro.description}</h3>
              <p>{pro.technologies}</p>
            </div>
            
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
