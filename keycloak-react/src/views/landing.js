
import React, { Component } from 'react';
import Logo from '../assets/images/FACET_Logo.svg';
import '../assets/styles/App.css';

class Welcome extends Component {
    render() {
      return (
        <div className="App">
            <header className="App-header">
                <img src={Logo} className="App-logo" alt="logo" />
            </header>
        </div>
      );
    }
  }
  export default Welcome;