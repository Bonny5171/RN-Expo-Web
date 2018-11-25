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


class HomeScreen extends React.Component {
  render(){
    return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
        <Text>Home Screen</Text>
        <Button 
          title='Go to primeira screen'
          onPress={() => { this.props.navigation.navigate('PrimeiraScreen'); }}
        />
      </View>
    )
  }
}

export default HomeScreen;