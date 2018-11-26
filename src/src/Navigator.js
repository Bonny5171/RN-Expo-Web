import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'

import Main from '../screens/Main'; 
import Home from '../screens/Home';
//import Setup from '../screens/Setup';
import Setup from '../pages/Setup';
import PrimeiraScreen from '../screens/PrimeiraScreen';
import SegundaScreen from '../screens/SegundaScreen';

export const Navigator = new StackNavigator({
  Main: { screen: Main },
  Home: { screen: Home },
  Setup: { screen: Setup },
  PrimeiraScreen: { screen: PrimeiraScreen },
  SegundaScreen: { screen: SegundaScreen },
},{
  initialRouteName: 'Main',
})

class Nav extends Component {
  render() {
    return (
      <Navigator navigation={addNavigationHelpers({
        dispatch: this.props.dispatch,
        state: this.props.navigation,
      })} />
    )
  }
}

const mapStateToProps = state => ({
  navigation: state.navigation,
})

export default connect(mapStateToProps)(Nav)