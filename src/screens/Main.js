import React from 'react';
import {
  Platform,
  Text,
  View,
  Button,
  AsyncStorage
} from 'react-native';
import { WebBrowser, Linking } from 'expo';

class MainScreen extends React.Component {
  async componentDidMount() {
    // Fluxo do Login ...
    const accessToken = await AsyncStorage.getItem('access_token');
    
    // Se tem token salvo, considero usuario conectado.
    // redireciono ele para Home.
    if (accessToken) {
      this.props.navigation.navigate('Setup');
    }
  }

  _handleRedirect = async (event) => {
    WebBrowser.dismissBrowser();

    const data = Linking.parse(event.url);
    const arrData = data.path.split('&');
    const promises = [];
    arrData.forEach(item => {
      try {
        const arrItem = item.split('=');
        const key = arrItem[0];
        const data = arrItem[1];
        promises.push(AsyncStorage.setItem(key, data));

        console.log(key, data)
      } catch (err) {
        console.error(err); 
      }
    });

    await Promise.all(promises);
    
    this.props.navigation.navigate('Setup');
  };

  _openWebBrowserAsync = async () => {
    if (Platform.OS !== 'web') {
      this._addLinkingListener();
    } 
    let result = await WebBrowser.openBrowserAsync(`https://everysfaenvs.z5.web.core.windows.net/`);
    if (Platform.OS !== 'web') {
      this._removeLinkingListener();
    }
  }

  _addLinkingListener = () => {
    Linking.addEventListener('url', this._handleRedirect);
  };

  _removeLinkingListener = () => {
    Linking.removeEventListener('url', this._handleRedirect);
  };

  render(){
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        <Text>Main Screen</Text>
        <Button 
          title='Login'
          onPress={this._openWebBrowserAsync}
        />
        <Button 
          title='Obter token'
          onPress={async () => {
            const value = await AsyncStorage.getItem('access_token');
            console.log('AcessToken', value);
          }}
        />
      </View>
    )
  }
}

export default MainScreen;