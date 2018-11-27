import React, { Component } from 'react';
import jsforce from 'jsforce';
import App from './App';
import * as SrvSync from './services/SyncDbWeb';
import * as SrvClients from './services/SGDLSqliteWeb/Clients';
import { authWeb } from '../config';

class AppRNW extends Component {
  state = {
    isLoggedIn: false
  };

  componentDidMount() {
    jsforce.browser.init({
      loginUrl: 'https://test.salesforce.com', // Deve ser configurável
      clientId: '3MVG9dZJodJWITSt.tR79Ykq6FQN7f6Vex08Gz1eqvwmt5r3YFFmY6vs1CM9cjP9b4Qv5wuuZzxgukp5JhMfT',
      redirectUri: 'http://localhost:8080/callback.html',
      proxyUrl: 'https://everysfa-api-setup-dev.azurewebsites.net/proxy'
    });

    if (!jsforce.browser.isLoggedIn() && authWeb) {
      jsforce.browser.login();
    }

    jsforce.browser.on('connect', (conn) => {
      this.setState({
        isLoggedIn: jsforce.browser.logout()
      });
    });
  }

  render() {
    return (
      <App
        isLoggedIn={this.state.isLoggedIn}
        jsforce={jsforce}
        {...SrvSync}
        {...SrvClients}
      />
    );
  }
}

export default AppRNW;
