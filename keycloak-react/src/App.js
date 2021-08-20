
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
          <ul>
            <li><Link to="/">public component</Link></li>
            <li><Link to="/secured">secured component</Link></li>
          </ul>
          <Route exact path="/" component={Landing} />
          <Route path="/secured" component={Secured} />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
