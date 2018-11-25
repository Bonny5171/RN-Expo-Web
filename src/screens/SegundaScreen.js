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


class SegundaScreen extends React.Component {
  render(){
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        <Text>2 - Segunda Screen</Text>
        <Button 
          title='Go to Home screen'
          onPress={() => { this.props.navigation.navigate('Home'); }}
        />
      </View>
    )
  }
}

export default SegundaScreen;