import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainView from './components/mainView';

class MyPortfolioSite extends React.Component {
  render() {
    return (
      <MainView />
    );
  }
}

// Finds the root of the application
const container = document.getElementsByClassName('app-container')[0];

ReactDOM.render(React.createElement(MyPortfolioSite), container);

