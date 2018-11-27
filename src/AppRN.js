import React from 'react';
import { oauth, net } from 'react-native-force';
import App from './App';
import * as SrvSync from './services/SyncDb';
import * as SrvClients from './services/SGDLSqlite/Clients';

class AppRN extends React.Component {
  componentDidMount() {
    const that = this;

    const getCredentials = () => that.fetchData();

    const authenticate = () => {
      oauth.authenticate(
        () => that.fetchData(),
        error => console.error(`Failed to authenticate: ${error}`)
      );
    };

    oauth.getAuthCredentials(getCredentials, authenticate);

    // A cada 1 hora o app tenta acessar os resources da organização
    // No caso da falha, o refreshToken foi revogado,
    // Então, ele é forçado a entrar com as credenciais novamente
    setInterval(() => net.resources(() => oauth.logout()), 3600000);
  }

  fetchData() {
    const that = this;
    net.query('SELECT Id, Name FROM User LIMIT 10',
      response => that.setState({ data: response.records })
    );
  }

  render() {
    return (
      <App
        isLoggedIn
        oauth={oauth}
        {...SrvSync}
        {...SrvClients}
      />
    );
  }
}

export default AppRN;