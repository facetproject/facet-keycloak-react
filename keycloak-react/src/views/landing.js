
import React, { Component } from 'react';
import Logo from '../assets/images/FACET_Logo.svg';
import '../assets/styles/App.css';

class Welcome extends Component {
    render() {
      return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
                <p>This is your public-facing component.</p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
            </header>
        </div>
      );
    }
  }
  export default Welcome;