import React from 'react';
import { View, Text } from 'react-native';

import { SwitchNavigator } from 'react-navigation';

import Main from './screens/Main';
import Home from './screens/Home';
// import Setup from './screens/Setup';
import PrimeiraScreen from './screens/PrimeiraScreen';
import SegundaScreen from './screens/SegundaScreen';
import Setup from './pages/Setup';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

/*
const App = SwitchNavigator(
  {
    Main,
    Setup,
    Home,
    PrimeiraScreen,
    SegundaScreen,
  },
  {
    initialRouteName: 'Main'
  }
);
*/

const store = createStore(reducers);

console.log('STORE', store)

const App = props => (
  <Provider store={store}>
    <Setup {...props} />
  </Provider>
)

export default App;