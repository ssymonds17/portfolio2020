import React from 'react';
import '../styles/components/footer.scss';
import GithubSVG from '../images/github_icon.svg';
import LinkedInSVG from '../images/linkedin_icon.svg';
import TwitterSVG from '../images/twitter_icon.svg';
import MediumSVG from '../images/medium_icon.svg';
import EmailSVG from '../images/email_icon.svg';

const Footer = () => {

 return (

  <section id="footer">
   <div className="footer">
    <div className="footer-left-content">
     <p>Samuel Symonds &copy; {new Date().getFullYear()}</p>
    </div>
    <div className="footer-right-content">
     <a href="https://github.com/ssymonds17" target="_blank" rel="noopener noreferrer"><img src={GithubSVG} alt="Github icon" className="footer-icon" width="32px" /></a>
     <a href="https://www.linkedin.com/in/samuel-symonds-85bb35162/" target="_blank" rel="noopener noreferrer"><img src={LinkedInSVG} alt="LinkedIn icon" className="footer-icon" width="32px" /></a>
     <a href="https://medium.com/@samuelsymonds2017" target="_blank" rel="noopener noreferrer"><img src={MediumSVG} alt="Medium icon" className="footer-icon" width="32px" /></a>
     <a href="https://twitter.com/sam90498108" target="_blank" rel="noopener noreferrer"><img src={TwitterSVG} alt="Twitter icon" className="footer-icon" width="32px" /></a>
     <a href="mailto:samuelsymonds2017@gmail.com" target="_blank" rel="noopener noreferrer"><img src={EmailSVG} alt="Email icon" className="footer-icon" width="32px" /></a>
    </div>
   </div>
  </section>
 )
}

export default Footer