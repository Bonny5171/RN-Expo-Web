import React, { Component } from 'react';
import jsforce from 'jsforce';
import App from './App';
// import * as SrvSync from './services/SyncDbWeb';
// import * as SrvClients from './services/SGDLSqliteWeb/Clients';
// import { authWeb } from '../config';

class AppRNW extends Component {
  state = {
    isLoggedIn: false
  };

  render() {
    return (
      <App
        isLoggedIn={this.state.isLoggedIn}
        jsforce={jsforce}
      />
    );
  }
}

export default AppRNW;
