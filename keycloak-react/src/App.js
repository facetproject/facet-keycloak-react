
import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from './views/landing';
import Secured from './views/secured';
import './assets/styles/App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          {/* Reversed the original logic to take user to login page */}
          <Route exact path="/landing" component={Landing} />
          <Route path="/" component={Secured} />
          {/*<ul>
            <li><Link to="/landing">public component</Link></li>
            <li><Link to="/">secured component</Link></li>
          </ul>*/}
          
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
