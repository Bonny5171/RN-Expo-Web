/*import { SwitchNavigator } from 'react-navigation';

import Main from './screens/Main';
import Home from './screens/Home';
import Setup from './pages/Setup';
import PrimeiraScreen from './screens/PrimeiraScreen';
import SegundaScreen from './screens/SegundaScreen';

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

export default App;*/

import React from 'react';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import iconFontStyles from './assets/styles/iconFontStyles';
import Content from './Content';


if (Platform.OS === 'web') {
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = iconFontStyles;
  } else {
    style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
}
const store = createStore(reducers);
console.log('store', store)

console.disableYellowBox = true;

const App = props => (
  <Provider store={store}>
    <Content {...props} />
  </Provider>
);

export default App;