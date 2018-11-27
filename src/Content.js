import React from 'react';
import { View, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Font } from 'expo'
import { Menu } from './components';
import { backgroundVendor, backgroundAdmin } from './assets/imgs';
import Routes from './utils/routing/Routes';
const Stack = StackNavigator(Routes, { initialRouteName: 'Setup', headerMode: 'none' });


class Content extends React.Component {
  state = {
    fontLoaded: false,
  };
  static router = Stack.router;

  async componentDidMount() {
    await Font.loadAsync({
      'every_products': require('./assets/fonts/every_products.ttf'),
      'EncodeSans-Bold': require('./assets/fonts/EncodeSans-Bold.ttf'),
      'EncodeSans-Light': require('./assets/fonts/EncodeSans-Light.ttf'),
      'EncodeSans-Medium': require('./assets/fonts/EncodeSans-Medium.ttf'),
      'EncodeSans-Regular': require('./assets/fonts/EncodeSans-Regular.ttf'),
      'EncodeSans-SemiBold': require('./assets/fonts/EncodeSans-SemiBold.ttf'),
      'EncodeSans-Thin': require('./assets/fonts/EncodeSans-Thin.ttf'),

      'EncodeSansCondensed-Bold': require('./assets/fonts/EncodeSansCondensed-Bold.ttf'),
      'EncodeSansCondensed-Light': require('./assets/fonts/EncodeSansCondensed-Light.ttf'),
      'EncodeSansCondensed-Medium': require('./assets/fonts/EncodeSansCondensed-Medium.ttf'),
      'EncodeSansCondensed-Regular': require('./assets/fonts/EncodeSansCondensed-Regular.ttf'),
      'EncodeSansCondensed-SemiBold': require('./assets/fonts/EncodeSansCondensed-SemiBold.ttf'),
      'EncodeSansCondensed-Thin': require('./assets/fonts/EncodeSansCondensed-Thin.ttf'),
    });

    this.setState({ fontLoaded: true });
  }


  render() {
    const { context, oauth, jsforce, navigation, SrvClients } = this.props;
    console.log('SRV',this.props.srvClients === undefined);
    const background = context === 'Vendedor' ? backgroundVendor : backgroundAdmin;
    if (!this.state.fontLoaded) return <View/>;
    return (
      <ImageBackground source={background} style={{ flex: 1, flexDirection: 'row', backgroundColor: 'white' }} resizeMode="cover">
        <Menu oauth={oauth} jsforce={jsforce} navigation={navigation} />
        <View style={{ flex: 1, flexDirection: 'column' }}>
          <Stack navigation={navigation} {...this.props} />
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
  context: state.global.context
});

export default connect(mapStateToProps)(Content);