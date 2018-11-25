import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';


class PrimeiraScreen extends React.Component {
  render() {

    console.log('pros >>>', this.props)
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        <Text>1 - Primeira Screen</Text>
        <Button 
          title='Go to segunda screen'
          onPress={() => { this.props.navigation.navigate('SegundaScreen'); }}
        />
      </View>
    )
  }
}

export default PrimeiraScreen;