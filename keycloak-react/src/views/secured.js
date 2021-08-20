import React, { Component } from 'react';
import UserInfo from '../components/userProfile/userInfo';
import Logout from '../components/userProfile/logout';
import Keycloak from 'keycloak-js';


class Secured extends Component {

  constructor(props) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }


  componentDidMount() {
    const keycloak = Keycloak('/keycloak.json');
    /*const keycloak = Keycloak({
        "realm": "mern1",
        "auth-server-url": "http://localhost:8080/auth/",
        "ssl-required": "external",
        "resource": "mern1-client",
        "public-client": true,
        "confidential-port": 0,
        "clientId": "account"
      });*/
      keycloak.init({onLoad: 'login-required'}).then(authenticated => {
        this.setState({ keycloak: keycloak, authenticated: authenticated })
      });
      console.log('This: ',this);
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated) return (
        <div>
          <p>This is a Keycloak-secured component of your application. You shouldn't be able
          to see this unless you've authenticated with Keycloak.</p>
          <UserInfo keycloak={this.state.keycloak} />
          <Logout keycloak={this.state.keycloak} />
        </div>        
      ); else return (<div>Unable to authenticate!</div>)
    }
    return (
      <div>Initializing Keycloak...</div>
    );
  }
}
export default Secured;