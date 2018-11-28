import React from 'react';
import { Platform } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Content from './Content';
import reducers from './reducers';
import iconFontStyles from './assets/styles/iconFontStyles';
import Expo from 'expo';

// Importacao das fontes para Web-Eletron.
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
class App extends React.Component {
  componentDidMount() {
    if (Platform.OS !== 'web')
      Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT);
  }

  componentWillUnmount() {
    if (Platform.OS !== 'web')
      Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);
  }

  render() {
    return (
      <Provider store={store}>
        <Content
          {...this.props}
        />
      </Provider>
    );
  }
} 

export default App;