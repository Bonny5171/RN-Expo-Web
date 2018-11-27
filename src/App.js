import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Content from './Content';
import reducers from './reducers';
import * as SrvClients from './services/SGDLSqlite/Clients';

const store = createStore(reducers);
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Content
          {...this.props}
          {...SrvClients}
        />
      </Provider>
    );
  }
} 

export default App;