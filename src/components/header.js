import React from 'react';
import '../styles/components/header.scss';
import './projects';
import './about';
import './footer';

const Header = () => {

 function scrollToTop() {
  const headerElement = document.getElementById('header');
  headerElement.scrollIntoView(true);
 }

 function scrollToProjects() {
  const projectsElement = document.getElementById('projects');
  projectsElement.scrollIntoView(true);
 }

 function scrollToAbout() {
  const aboutElement = document.getElementById('about');
  aboutElement.scrollIntoView(true);
 }

 function scrollToBottom() {
  const contactElement = document.getElementById('footer');
  contactElement.scrollIntoView(true);
 }


 return (
  <section id="header">
   <header>
    <div className="inner-header">
     <div className="logo">
      <button onClick={scrollToTop}>Samuel Symonds</button>
     </div>
     <div className="navigation">
      <nav>
       {/* This checkbox will give us the toggle behavior, it will be hidden, but functional */}
       <input type="checkbox" id="menu-toggle" />
       <label for="menu-toggle" className="hamburger">|||</label>
       <div className="nav-links">
        <button onClick={scrollToProjects}><span>projects</span></button>
        <button onClick={scrollToAbout}><span>about</span></button>
        <button onClick={scrollToBottom}><span>contact</span></button>
       </div>
      </nav>
      {/* <nav>
       <button onClick={scrollToProjects}><span>projects</span></button>
       <button onClick={scrollToAbout}><span>about</span></button>
       <button onClick={scrollToBottom}><span>contact</span></button>
      </nav> */}
     </div>
    </div>
   </header>
  </section>
 )
}

export default Header