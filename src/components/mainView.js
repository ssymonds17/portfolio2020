import React from 'react';
import '../styles/components/mainView.scss';
import Header from './header';
import Banner from './banner';
import Projects from './projects';
import About from './about';
import Footer from './footer';

const MainView = () => {
  return (
    <div className="large-container">
      <div className="content-wrapper">
        <Header />
        <Banner />
        <Projects />
        <About />
      </div>
      <Footer />
    </div>

  );
}

export default MainView;
