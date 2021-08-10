import React from 'react';
import '../styles/components/about.scss';

const About = () => {
  return (
    <section id='about'>
      <div className='about'>
        <div className='about-container'>
          <div className='about-text-container'>
            <h2>About</h2>
            <p>
              I have recently completed both a Web Developer Traineeship with IT
              CareerSwitch and CareerFoundry's Full Stack Web Development course
              after having worked within the tech industry for 2 years.
            </p>
            <p>
              After graduating in Japanese from SOAS, University of London, I
              have had the opportunity to work for Apple and a high growth tech
              startup Wheely. At Apple I worked as a bilingual maps analyst
              which sparked my interest in software and application development.
              Following this I spent a year working at Wheely in an Operations
              based role. This involved directly interacting with chauffeurs who
              partnered with the company and using data for quality assurance
              purposes.
            </p>
            <p>
              I am a huge sports fan so in my spare time I enjoy following a
              number of sports, particular football and basketball. Apart from
              this I love to indulge in my hobby of eating, which leads me to
              spend many hours in the kitchen at home with my friends and
              family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
